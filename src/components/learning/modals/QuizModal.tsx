// File: src/components/learning/modals/QuizModal.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { animationVariants } from '../learningPathData';
import { QuizQuestion } from '../quizData';
import { 
  QuizService, 
  QuizState, 
  QuizLevel, 
  QuizResult,
  ExperienceLevel 
} from '../services/quizService';

interface QuizModalProps {
  selectedSubject: string;
  onComplete: (level: ExperienceLevel, beginnerScore: number, intermediateScore?: number) => void;
  onClose: () => void;
  theme: string;
}

const QuizModal: React.FC<QuizModalProps> = ({
  selectedSubject,
  onComplete,
  onClose,
  theme
}) => {
  // Quiz state management
  const [quizState, setQuizState] = useState<QuizState>('intro');
  
  // Questions for each level
  const [beginnerQuestions, setBeginnerQuestions] = useState<QuizQuestion[]>([]);
  const [intermediateQuestions, setIntermediateQuestions] = useState<QuizQuestion[]>([]);
  
  // Current question being displayed
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // User answers for each level
  const [beginnerAnswers, setBeginnerAnswers] = useState<number[]>([]);
  const [intermediateAnswers, setIntermediateAnswers] = useState<number[]>([]);
  
  // Quiz results
  const [beginnerResult, setBeginnerResult] = useState<QuizResult | undefined>();
  const [intermediateResult, setIntermediateResult] = useState<QuizResult | undefined>();
  
  // Initialize the quiz
  useEffect(() => {
    // Load beginner questions for the selected subject
    const beginnerQs = QuizService.getQuizQuestions('beginner', selectedSubject);
    setBeginnerQuestions(beginnerQs);
    setBeginnerAnswers(Array(beginnerQs.length).fill(-1));
    
    // Load intermediate questions for the selected subject
    const intermediateQs = QuizService.getQuizQuestions('intermediate', selectedSubject);
    setIntermediateQuestions(intermediateQs);
    setIntermediateAnswers(Array(intermediateQs.length).fill(-1));
  }, [selectedSubject]);

  // Get current quiz questions based on state
  const getCurrentQuestions = (): QuizQuestion[] => {
    if (quizState === 'beginner-quiz') {
      return beginnerQuestions;
    } else if (quizState === 'intermediate-quiz') {
      return intermediateQuestions;
    }
    return [];
  };

  // Get current quiz answers based on state
  const getCurrentAnswers = (): number[] => {
    if (quizState === 'beginner-quiz') {
      return beginnerAnswers;
    } else if (quizState === 'intermediate-quiz') {
      return intermediateAnswers;
    }
    return [];
  };

  // Update answer for the current question
  const handleAnswerSelect = (answerIndex: number) => {
    if (quizState === 'beginner-quiz') {
      const newAnswers = [...beginnerAnswers];
      newAnswers[currentQuestionIndex] = answerIndex;
      setBeginnerAnswers(newAnswers);
    } else if (quizState === 'intermediate-quiz') {
      const newAnswers = [...intermediateAnswers];
      newAnswers[currentQuestionIndex] = answerIndex;
      setIntermediateAnswers(newAnswers);
    }
  };

  // Move to next question or complete quiz
  const handleNextQuestion = () => {
    const questions = getCurrentQuestions();
    
    if (currentQuestionIndex < questions.length - 1) {
      // Go to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate result and move to next state
      if (quizState === 'beginner-quiz') {
        const result = QuizService.calculateResult(beginnerQuestions, beginnerAnswers);
        setBeginnerResult(result);
        setQuizState(QuizService.getNextState(quizState, result));
        setCurrentQuestionIndex(0); // Reset for potential intermediate quiz
      } else if (quizState === 'intermediate-quiz') {
        const result = QuizService.calculateResult(intermediateQuestions, intermediateAnswers);
        setIntermediateResult(result);
        setQuizState(QuizService.getNextState(quizState, result));
      }
    }
  };

  // Handle moving to the next state
  const handleContinue = () => {
    // Get the next state based on current state and results
    const nextState = QuizService.getNextState(
      quizState, 
      quizState === 'beginner-results' ? beginnerResult : intermediateResult
    );
    
    if (nextState === 'completed') {
      // Quiz is complete, determine final experience level and pass back scores
      const experienceLevel = QuizService.determineExperienceLevel(beginnerResult, intermediateResult);
      onComplete(
        experienceLevel, 
        beginnerResult?.score || 0, 
        intermediateResult?.score
      );
    } else {
      // Move to next state
      setQuizState(nextState);
    }
  };

  // Render intro screen
  const renderIntro = () => (
    <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(100vh-120px)]">
      <h3 className={`text-xl font-semibold mb-3 md:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Knowledge Assessment for {selectedSubject}
      </h3>
      
      <p className={`mb-3 md:mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        We'll ask you a series of questions to help determine your knowledge level in {selectedSubject}. 
        This will allow us to create a more personalized learning path for you.
      </p>
      
      <p className={`mb-4 md:mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        We'll start with some beginner-level questions. If you perform well, 
        we'll move on to intermediate questions to further assess your knowledge.
      </p>
      
      <div className="flex justify-end">
        <motion.button
          onClick={() => setQuizState('beginner-quiz')}
          className={`px-4 py-2 rounded-md font-medium ${
            theme === 'dark'
              ? 'bg-purple-600 hover:bg-purple-700 text-white'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Start Assessment
        </motion.button>
      </div>
    </div>
  );

  // Render quiz questions
  const renderQuizQuestions = () => {
    const questions = getCurrentQuestions();
    const answers = getCurrentAnswers();
    const currentQuestion = questions[currentQuestionIndex];
    
    if (!currentQuestion) return null;
    
    return (
      <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(100vh-120px)]">
        <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} mb-4 md:mb-6`}>
          <motion.div 
            className={`h-full rounded-full ${
              quizState === 'beginner-quiz'
                ? 'bg-green-600'
                : 'bg-purple-600'
            }`}
            initial={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
        
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
            quizState === 'beginner-quiz'
              ? theme === 'dark' ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800'
              : theme === 'dark' ? 'bg-purple-800 text-purple-100' : 'bg-purple-100 text-purple-800'
          }`}>
            {quizState === 'beginner-quiz' ? 'Beginner' : 'Intermediate'} Level
          </span>
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
        
        <motion.div 
          className={`text-lg mb-4 md:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          key={`question-${currentQuestion.id}-${currentQuestionIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentQuestion.question}
        </motion.div>
        
        <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
          {currentQuestion.options.map((option, index) => (
            <motion.div
              key={`${currentQuestion.id}-option-${index}`}
              className={`w-full py-2 md:py-3 px-3 md:px-4 rounded-lg cursor-pointer transition-all ${
                answers[currentQuestionIndex] === index
                  ? theme === 'dark' 
                    ? 'bg-purple-700 text-white ring-2 ring-purple-500' 
                    : 'bg-purple-100 text-purple-800 ring-2 ring-purple-500'
                  : theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              whileHover={{ scale: 1.01, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.99 }}
              onClick={() => handleAnswerSelect(index)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { delay: index * 0.1, duration: 0.3 }
              }}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex-shrink-0 flex items-center justify-center ${
                  answers[currentQuestionIndex] === index
                    ? theme === 'dark'
                      ? 'border-white'
                      : 'border-purple-700'
                    : theme === 'dark'
                      ? 'border-gray-400'
                      : 'border-gray-400'
                }`}>
                  {answers[currentQuestionIndex] === index && (
                    <motion.div 
                      className={`w-2.5 h-2.5 rounded-full ${
                        theme === 'dark' ? 'bg-white' : 'bg-purple-700'
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    ></motion.div>
                  )}
                </div>
                <span>{option}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-between">
          <motion.button
            onClick={onClose}
            className={`px-4 py-2 rounded-md text-sm md:text-base ${
              theme === 'dark'
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Cancel
          </motion.button>
          
          <motion.button
            onClick={handleNextQuestion}
            disabled={answers[currentQuestionIndex] === -1}
            className={`px-4 py-2 rounded-md font-medium text-sm md:text-base ${
              answers[currentQuestionIndex] === -1
                ? 'bg-gray-400 cursor-not-allowed'
                : theme === 'dark'
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}
            whileHover={answers[currentQuestionIndex] !== -1 ? { scale: 1.03 } : {}}
            whileTap={answers[currentQuestionIndex] !== -1 ? { scale: 0.97 } : {}}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Complete'}
          </motion.button>
        </div>
      </div>
    );
  };

  // Render quiz results
  const renderResults = () => {
    // Determine which result to show based on the state
    const result = quizState === 'beginner-results' ? beginnerResult : intermediateResult;
    
    if (!result) return null;
    
    // Determine next steps based on the result
    const nextSteps = quizState === 'beginner-results'
      ? result.passed
        ? 'Continue to intermediate questions'
        : 'Generate learning path for beginners'
      : 'Generate your personalized learning path';
    
    return (
      <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(100vh-120px)]">
        <h3 className={`text-xl font-semibold mb-3 md:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {quizState === 'beginner-results' ? 'Beginner' : 'Intermediate'} Assessment Results
        </h3>
        
        <div className={`p-4 md:p-5 rounded-lg mb-4 md:mb-6 ${
          result.passed
            ? theme === 'dark' ? 'bg-green-900/30 text-green-200' : 'bg-green-100 text-green-800'
            : theme === 'dark' ? 'bg-orange-900/30 text-orange-200' : 'bg-orange-100 text-orange-800'
        }`}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-medium">Your Score:</span>
            <span className="text-lg font-bold">{result.score}%</span>
          </div>
          
          <div className={`w-full h-3 rounded-full ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
          } mb-4`}>
            <motion.div 
              className={`h-full rounded-full ${
                result.passed
                  ? 'bg-green-500'
                  : 'bg-orange-500'
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${result.score}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
          
          <p>
            You answered {result.correctCount} out of {result.questionsCount} questions correctly.
          </p>
        </div>
        
        <div className="mb-4 md:mb-6">
          <h4 className={`font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Assessment:
          </h4>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {result.passed
              ? `Great job! You have demonstrated a good understanding of ${quizState === 'beginner-results' ? 'beginner' : 'intermediate'} concepts in ${selectedSubject}.`
              : `You may benefit from focusing on strengthening your understanding of ${quizState === 'beginner-results' ? 'beginner' : 'intermediate'} concepts in ${selectedSubject}.`
            }
          </p>
          
          {!result.passed && quizState === 'beginner-results' && (
            <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              We'll create a learning path focused on beginner-level content to help you build a solid foundation.
            </p>
          )}
          
          {result.passed && quizState === 'beginner-results' && (
            <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's continue with some intermediate questions to better tailor your learning path.
            </p>
          )}
          
          {quizState === 'intermediate-results' && (
            <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Based on your performance, we'll customize a learning path that focuses on the areas where you can grow.
            </p>
          )}
        </div>
        
        <div className="flex justify-between">
          <motion.button
            onClick={onClose}
            className={`px-4 py-2 rounded-md text-sm md:text-base ${
              theme === 'dark'
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Cancel
          </motion.button>
          
          <motion.button
            onClick={handleContinue}
            className={`px-4 py-2 rounded-md font-medium text-sm md:text-base ${
              theme === 'dark'
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {nextSteps}
          </motion.button>
        </div>
      </div>
    );
  };

  // Main render function
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-4"
      variants={animationVariants.backdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <motion.div 
        className={`relative w-full max-w-md md:max-w-xl rounded-xl overflow-hidden flex flex-col ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-2xl max-h-[90vh]`}
        variants={animationVariants.modal}
      >
        <div className={`px-4 md:px-6 py-4 flex-shrink-0 ${theme === 'dark' ? 'border-b border-gray-700' : 'border-b border-gray-200'}`}>
          <div className="flex justify-between items-center">
            <h3 className="text-lg md:text-xl font-semibold">Knowledge Assessment</h3>
            <div className="flex items-center">
              {(quizState === 'beginner-quiz' || quizState === 'intermediate-quiz') && (
                <span className={`text-sm mr-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {getCurrentQuestions().length ? `${currentQuestionIndex + 1}/${getCurrentQuestions().length}` : ''}
                </span>
              )}
              <button 
                onClick={onClose}
                className={`rounded-full p-1 ${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex-grow overflow-y-auto">
          {/* Render different content based on quiz state */}
          {quizState === 'intro' && renderIntro()}
          {(quizState === 'beginner-quiz' || quizState === 'intermediate-quiz') && renderQuizQuestions()}
          {(quizState === 'beginner-results' || quizState === 'intermediate-results') && renderResults()}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuizModal;