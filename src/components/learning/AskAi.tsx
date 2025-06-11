// src/components/learning/EnhancedAskAi.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import apiService from '../../api/apiService';
import ReactMarkdown from 'react-markdown';
import AskAiLoadingOverlay from '../common/AskAiLoadingOverlay';

// Type definitions for SpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

// Enhanced TypeWriter component with ChatGPT-like speed and hidden scroll
const TypeWriter: React.FC<{
  text: string;
  speed?: number;
  isDarkMode?: boolean;
  onComplete?: () => void;
  maxHeight?: string;
  hideScrollbar?: boolean;
}> = ({ 
  text, 
  speed = 20, // ChatGPT-like speed
  isDarkMode = false, 
  onComplete,
  maxHeight = "800px", // Increased height to minimize scrolling need
  hideScrollbar = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
        
        // Auto-scroll to bottom as text appears (like ChatGPT) but hide scrollbar
        if (containerRef.current) {
          setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }
          }, 0);
        }
      }, speed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [text, currentIndex, speed, isComplete, onComplete]);

  // Reset when text changes
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  return (
    <div 
      ref={containerRef}
      className={`
        prose max-w-none 
        ${isDarkMode ? 'prose-invert' : ''} 
        overflow-y-auto
        transition-all duration-200 ease-in-out
      `}
      style={{ 
        maxHeight: maxHeight,
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        // Hide scrollbar but keep functionality
        scrollbarWidth: hideScrollbar ? 'none' : 'thin',
        msOverflowStyle: hideScrollbar ? 'none' : 'auto',
        WebkitScrollbar: hideScrollbar ? { display: 'none' } : undefined,
      }}
    >
      <style>
        {hideScrollbar && `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <div className={hideScrollbar ? 'hide-scrollbar' : ''}>
        <ReactMarkdown 
          components={{
            // Ensure all text elements handle overflow properly
            p: ({ children }) => (
              <p className="break-words whitespace-pre-wrap">{children}</p>
            ),
            code: ({ children }) => (
              <code className="break-all whitespace-pre-wrap bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">{children}</code>
            ),
            pre: ({ children }) => (
              <pre className="whitespace-pre-wrap overflow-x-auto bg-gray-100 dark:bg-gray-800 p-4 rounded-md">{children}</pre>
            ),
            h1: ({ children }) => (
              <h1 className="break-words">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="break-words">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="break-words">{children}</h3>
            ),
            li: ({ children }) => (
              <li className="break-words">{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="break-words border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic">{children}</blockquote>
            )
          }}
        >
          {displayedText}
        </ReactMarkdown>
        {!isComplete && (
          <span 
            className="inline-block w-2 h-4 ml-1 bg-purple-500 opacity-100"
            style={{ 
              animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
        )}
      </div>
    </div>
  );
};

interface ApiResponse {
  answer: string;
  sources: string[];
}

const EnhancedAskAi: React.FC = () => {
  const { theme } = useTheme();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>('');
  const [charCount, setCharCount] = useState<number>(0);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [showResponse, setShowResponse] = useState<boolean>(false);
  const [recentQuestions, setRecentQuestions] = useState<string[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [typingComplete, setTypingComplete] = useState<boolean>(false);

  const responseRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<any>(null);

  // Load recent questions from localStorage
  useEffect(() => {
    const storedQuestions = localStorage.getItem('recentQuestions');
    if (storedQuestions) {
      try {
        const parsedQuestions = JSON.parse(storedQuestions);
        if (Array.isArray(parsedQuestions)) {
          setRecentQuestions(parsedQuestions.slice(0, 3)); // Keep only most recent 3
        }
      } catch (err) {
        console.error('Error parsing stored questions:', err);
      }
    }
  }, []);

  // Setup speech recognition
  useEffect(() => {
    // Check if browser supports speech recognition
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');

        setTranscript(transcript);
        setQuestion(transcript);
        setCharCount(transcript.length);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Scroll to response when it appears
  useEffect(() => {
    if (showResponse && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showResponse, response]);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [question]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const responseVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.03, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  // Toggle voice input
  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      setError('Your browser does not support voice input.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setError(null);
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const askQuestion = async () => {
    if (!question.trim()) {
      setError('Please enter a question to ask');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      setShowResponse(false);
      setTypingComplete(false);

      // Using the AI service method
      const response = await apiService.aiCourses.askAi(question);

      if (response.success && response.data) {
        // Update recent questions list
        const newRecentQuestions = [question, ...recentQuestions.slice(0, 2)];
        setRecentQuestions(newRecentQuestions);
        localStorage.setItem('recentQuestions', JSON.stringify(newRecentQuestions));

        setResponse(response.data);
        setShowResponse(true);
      } else {
        setError(response.error || 'Failed to get a response');
      }
    } catch (err) {
      console.error('Error asking question:', err);
      setError('Failed to get a response. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setQuestion(value);
    setCharCount(value.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Submit on Enter (without Shift)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (question.trim()) {
        askQuestion();
      }
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const renderResponse = () => {
    if (!response) return null;

    return (
      <AnimatePresence mode="wait">
        {showResponse && (
          <motion.div
            ref={responseRef}
            className={`max-w-3xl mx-auto mt-8 ${theme === 'dark'
                ? 'bg-gray-800 shadow-lg border border-gray-700'
                : 'bg-white shadow-md border border-purple-100'
              } rounded-xl overflow-hidden`}
            variants={responseVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-full mr-3 ${theme === 'dark'
                      ? 'bg-purple-900/40 text-purple-300'
                      : 'bg-purple-100 text-purple-600'
                    }`}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    AI Response
                  </h3>
                </div>

                {/* Copy Button */}
                <div className="flex items-center">
                  <button
                    onClick={() => copyToClipboard(response.answer)}
                    className={`p-2 rounded-md mr-2 text-sm flex items-center ${theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      } transition-colors`}
                  >
                    {copied ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                          <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setShowResponse(false)}
                    className={`p-1 rounded-full ${theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Enhanced AI Typing Effect with Overflow Handling */}
              {response.answer && (
                <div className="relative">
                  <TypeWriter
                    text={response.answer}
                    speed={1} 
                    isDarkMode={theme === 'dark'}
                    onComplete={() => setTypingComplete(true)}
                    maxHeight="800px" // Increased height
                    hideScrollbar={false} // Hide scrollbar but keep scroll functionality
                  />
                </div>
              )}

              <motion.div
                className="mt-6 flex justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={() => {
                    setQuestion('');
                    setCharCount(0);
                    setResponse(null);
                    setShowResponse(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    if (textareaRef.current) {
                      textareaRef.current.focus();
                    }
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${theme === 'dark'
                      ? 'bg-purple-800 hover:bg-purple-700 text-white'
                      : 'bg-purple-100 hover:bg-purple-200 text-purple-700'
                    } transition-colors`}
                >
                  Ask another question
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <AskAiLoadingOverlay isLoading={isSubmitting} />
      <motion.div
        className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} py-8`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-3`}>
              Ask AI Assistant
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Get instant answers to your questions about programming, technology, and more
            </p>
          </motion.div>

          {error && (
            <motion.div
              className={`max-w-3xl mx-auto mb-6 ${theme === 'dark'
                  ? 'bg-red-900/30 border-red-700 text-red-300'
                  : 'bg-red-100 border-red-500 text-red-700'
                } border-l-4 p-4 rounded-r-md`}
              role="alert"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <p>{error}</p>
            </motion.div>
          )}

          <motion.div
            className={`max-w-3xl mx-auto ${theme === 'dark'
                ? 'bg-gray-800 shadow-lg border border-gray-700'
                : 'bg-white shadow-md border border-purple-100'
              } rounded-xl overflow-hidden`}
            variants={itemVariants}
          >
            <div className={`px-4 py-3 flex items-center ${theme === 'dark'
                ? 'bg-gray-700/50 border-b border-gray-700'
                : 'bg-purple-50 border-b border-purple-100'
              }`}>
              <div className={`p-1 rounded-full ${theme === 'dark'
                  ? 'bg-purple-700/50 text-purple-300'
                  : 'bg-purple-100 text-purple-600'
                }`}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={`ml-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Ask a Question
              </h3>
            </div>

            <div className="p-6">
              <motion.div className="mb-5 relative" variants={itemVariants}>
                <div className="relative">
                  <textarea
                    ref={textareaRef}
                    disabled={isSubmitting}
                    value={question}
                    onChange={handleTextareaChange}
                    onKeyDown={handleKeyDown}
                    placeholder="What would you like to know about programming or technology?"
                    rows={3}
                    className={`w-full px-4 py-3 ${theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500'
                      } border rounded-md shadow-sm focus:outline-none text-base transition-all resize-none`}
                  />
                  <div className={`absolute bottom-2 right-2 text-xs ${charCount > 0
                      ? (theme === 'dark' ? 'text-purple-300' : 'text-purple-500')
                      : (theme === 'dark' ? 'text-gray-400' : 'text-gray-500')
                    }`}>
                    {charCount} characters
                  </div>

                  {/* Voice Input Button */}
                  <div className="absolute right-3 bottom-12">
                    <button
                      type="button"
                      onClick={toggleVoiceInput}
                      className={`p-2 rounded-full ${isListening
                          ? (theme === 'dark' ? 'bg-red-600 text-white' : 'bg-red-500 text-white')
                          : (theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                        } transition-colors`}
                      title={isListening ? 'Stop listening' : 'Start voice input'}
                    >
                      {isListening ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <p className={`mt-2 text-xs flex items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Press Enter to submit your question (Shift+Enter for new line)
                </p>
              </motion.div>

              <motion.button
                onClick={askQuestion}
                disabled={isSubmitting || !question.trim()}
                className={`w-full px-6 py-3 border border-transparent text-base font-medium rounded-md ${theme === 'dark'
                    ? 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
                    : 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
                  } text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 shadow-md transition-all`}
                variants={isSubmitting ? pulseVariants : itemVariants}
                animate={isSubmitting ? "pulse" : "visible"}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Thinking...
                  </span>
                ) : (
                  <>Ask AI</>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Response Section */}
          {renderResponse()}
        </div>
      </motion.div>
    </>
  );
};

export default EnhancedAskAi;