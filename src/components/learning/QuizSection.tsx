// src/components/learning/QuizSection.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizQuestion, QuizAnswer, QuizResult } from '../../types/LessonTypes';
import { showToast } from '../../utils/toastUtils';

interface QuizSectionProps {
  quiz: QuizQuestion[];
  theme: string;
  onQuizComplete?: (result: QuizResult) => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ quiz, theme, onQuizComplete }) => {
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizResult, setQuizResult] = useState<QuizResult>({ correct: 0, total: 0, percentage: 0 });

  // Initialize quiz answers
  useEffect(() => {
    if (quiz && quiz.length > 0) {
      const initialAnswers = quiz.map(question => ({
        questionId: question.id,
        selectedOption: null
      }));
      setQuizAnswers(initialAnswers);
      setQuizSubmitted(false);
      setQuizResult({ correct: 0, total: 0, percentage: 0 });
    }
  }, [quiz]);

  // Handle selecting an answer in the quiz
  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return; // Prevent changing answers after submission
    
    setQuizAnswers(prev => 
      prev.map(answer => 
        answer.questionId === questionId 
          ? { ...answer, selectedOption: optionIndex }
          : answer
      )
    );
  };

  // Handle quiz submission
  const handleSubmitQuiz = () => {
    if (!quiz || quiz.length === 0) return;
    
    // Check if all questions have been answered
    const unanswered = quizAnswers.filter(answer => answer.selectedOption === null);
    if (unanswered.length > 0) {
       showToast.error(`Please answer all questions before submitting. You have ${unanswered.length} unanswered questions.`);
      return;
    }
    
    // Mark correct/incorrect answers
    let correctCount = 0;
    const gradedAnswers = quizAnswers.map(answer => {
      const question = quiz.find(q => q.id === answer.questionId);
      const isCorrect = question?.correctOptionIndex === answer.selectedOption;
      
      if (isCorrect) correctCount++;
      
      return {
        ...answer,
        isCorrect
      };
    });
    
    const percentage = (correctCount / quiz.length) * 100;
    const result = { 
      correct: correctCount, 
      total: quiz.length,
      percentage: parseFloat(percentage.toFixed(1))
    };
    
    setQuizAnswers(gradedAnswers);
    setQuizResult(result);
    setQuizSubmitted(true);
    
    // Notify parent component if callback provided
    if (onQuizComplete) {
      onQuizComplete(result);
    }
  };

  // Reset quiz to try again
  const resetQuiz = () => {
    if (!quiz || quiz.length === 0) return;
    
    const initialAnswers = quiz.map(question => ({
      questionId: question.id,
      selectedOption: null
    }));
    
    setQuizAnswers(initialAnswers);
    setQuizSubmitted(false);
    setQuizResult({ correct: 0, total: 0, percentage: 0 });
  };

  // Get background color based on score
  const getScoreBackgroundColor = (percentage: number) => {
    if (percentage === 100) {
      return theme === 'dark' ? 'from-green-800/30 to-green-600/20' : 'from-green-100 to-green-50';
    } else if (percentage >= 70) {
      return theme === 'dark' ? 'from-blue-800/30 to-blue-600/20' : 'from-blue-100 to-blue-50';
    } else {
      return theme === 'dark' ? 'from-amber-800/30 to-amber-600/20' : 'from-amber-100 to-amber-50';
    }
  };

  return (
    <div className="space-y-8">
      {/* Show quiz results if submitted */}
      {quizSubmitted && (
        <motion.div 
          className={`p-6 mb-8 rounded-xl shadow-md bg-gradient-to-br ${getScoreBackgroundColor(quizResult.percentage)}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="flex-1">
              <h3 className={`text-xl font-bold mb-2 ${
                theme === 'dark'
                  ? quizResult.percentage === 100 ? 'text-green-300' : quizResult.percentage >= 70 ? 'text-blue-300' : 'text-amber-300'
                  : quizResult.percentage === 100 ? 'text-green-700' : quizResult.percentage >= 70 ? 'text-blue-700' : 'text-amber-700'
              }`}>
                Quiz Results
              </h3>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-lg font-bold ${
                  theme === 'dark' 
                    ? 'text-white' 
                    : 'text-gray-800'
                }`}>
                  {quizResult.percentage}%
                </span>
                <div className="h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <motion.div 
                    className={`h-full rounded-full ${
                      quizResult.percentage === 100 
                        ? 'bg-green-500' 
                        : quizResult.percentage >= 70 
                          ? 'bg-blue-500' 
                          : 'bg-amber-500'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${quizResult.percentage}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
              <p className={`${
                theme === 'dark' 
                  ? 'text-gray-300' 
                  : 'text-gray-700'
              }`}>
                You got <span className="font-semibold">{quizResult.correct} out of {quizResult.total}</span> questions correct
              </p>
              <p className={`mt-3 ${
                theme === 'dark' 
                  ? 'text-gray-200' 
                  : 'text-gray-600'
              }`}>
                {quizResult.percentage === 100 
                  ? 'Excellent! You\'ve mastered this content perfectly.' 
                  : quizResult.percentage >= 70
                    ? 'Good job! You\'re on the right track. Review a few concepts to master this topic.'
                    : 'Keep going! Review the material and try again to improve your understanding.'}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className={`relative w-24 h-24 rounded-full flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-gray-800/50'
                  : 'bg-white'
              } shadow-lg`}>
                {quizResult.percentage === 100 ? (
                  // Perfect score icon
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <svg className={`w-14 h-14 ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-500'
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                ) : quizResult.percentage >= 70 ? (
                  // Good score icon
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <svg className={`w-14 h-14 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </motion.div>
                ) : (
                  // Needs improvement icon
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <svg className={`w-14 h-14 ${
                      theme === 'dark' ? 'text-amber-400' : 'text-amber-500'
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </motion.div>
                )}
                <AnimatePresence>
                  {quizResult.percentage === 100 && (
                    <motion.div 
                      className="absolute -top-3 -right-3"
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <span className="text-3xl">🎉</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Questions */}
      <div className="space-y-6">
        {quiz.map((question, index) => {
          const answer = quizAnswers.find(a => a.questionId === question.id);
          const isAnswered = answer?.selectedOption !== null;
          const isCorrect = answer?.isCorrect;
          
          return (
            <motion.div 
              key={question.id} 
              className={`overflow-hidden rounded-xl shadow-md ${
                theme === 'dark' 
                  ? 'bg-gray-800/60 border border-gray-700' 
                  : 'bg-white border border-gray-100'
              } ${
                quizSubmitted && isAnswered
                  ? isCorrect
                    ? theme === 'dark' ? 'ring-2 ring-green-500/30' : 'ring-2 ring-green-500/30'
                    : theme === 'dark' ? 'ring-2 ring-red-500/30' : 'ring-2 ring-red-500/30'
                  : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Question header */}
              <div className={`flex items-center p-5 border-b ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
              }`}>
                <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full font-bold mr-3 ${
                  theme === 'dark' 
                    ? 'bg-purple-900/40 text-purple-200'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {index + 1}
                </div>
                <h3 className={`text-lg font-medium flex-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  {question.questionText}
                </h3>
                {quizSubmitted && (
                  <div className="ml-3">
                    {isCorrect ? (
                      <div className={`rounded-full p-1 ${
                        theme === 'dark' ? 'bg-green-900/20 text-green-400' : 'bg-green-100 text-green-600'
                      }`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <div className={`rounded-full p-1 ${
                        theme === 'dark' ? 'bg-red-900/20 text-red-400' : 'bg-red-100 text-red-600'
                      }`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Options */}
              <div className="p-5 space-y-3">
                {question.options.map((option, optIndex) => {
                  const isSelected = answer?.selectedOption === optIndex;
                  const isCorrectOption = question.correctOptionIndex === optIndex;
                  
                  return (
                    <div 
                      key={optIndex} 
                      className={`relative flex items-center p-3 rounded-lg ${
                        !quizSubmitted
                          ? isSelected
                            ? theme === 'dark' 
                              ? 'bg-purple-900/30 border border-purple-700/50'
                              : 'bg-purple-50 border border-purple-200'
                            : theme === 'dark'
                              ? 'border border-gray-700 hover:bg-gray-700/50'
                              : 'border border-gray-200 hover:bg-gray-50'
                          : isCorrectOption
                            ? theme === 'dark'
                              ? 'bg-green-900/20 border border-green-700/50'
                              : 'bg-green-50 border border-green-200'
                            : isSelected && !isCorrect
                              ? theme === 'dark'
                                ? 'bg-red-900/20 border border-red-700/50'
                                : 'bg-red-50 border border-red-200'
                              : theme === 'dark'
                                ? 'border border-gray-700'
                                : 'border border-gray-200'
                      } cursor-pointer transition-all duration-200`}
                      onClick={() => handleSelectAnswer(question.id, optIndex)}
                    >
                      {/* Custom radio button */}
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full ${
                        isSelected 
                          ? theme === 'dark' 
                            ? quizSubmitted 
                              ? isCorrect 
                                ? 'border-2 border-green-500 bg-green-500'
                                : 'border-2 border-red-500 bg-red-500'
                              : 'border-2 border-purple-500 bg-purple-500'
                            : quizSubmitted 
                              ? isCorrect 
                                ? 'border-2 border-green-600 bg-green-600'
                                : 'border-2 border-red-600 bg-red-600'
                              : 'border-2 border-purple-600 bg-purple-600'
                          : theme === 'dark'
                            ? 'border-2 border-gray-500 bg-transparent'
                            : 'border-2 border-gray-400 bg-transparent'
                      } flex items-center justify-center`}>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-white"/>
                        )}
                      </div>
                      
                      {/* Option text */}
                      <div className="ml-3 flex-1">
                        <label 
                          className={`block w-full ${
                            quizSubmitted
                              ? isCorrectOption
                                ? theme === 'dark' ? 'text-green-300 font-medium' : 'text-green-700 font-medium'
                                : isSelected && !isCorrect
                                  ? theme === 'dark' ? 'text-red-300' : 'text-red-600'
                                  : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                              : theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                          }`}
                        >
                          {option}
                        </label>
                      </div>
                      
                      {/* Correct/Incorrect indicators */}
                      {quizSubmitted && (
                        <div className="ml-2">
                          {isCorrectOption && (
                            <svg className={`w-5 h-5 ${
                              theme === 'dark' ? 'text-green-400' : 'text-green-600'
                            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          {isSelected && !isCorrect && (
                            <svg className={`w-5 h-5 ${
                              theme === 'dark' ? 'text-red-400' : 'text-red-600'
                            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Show explanation after submission */}
              <AnimatePresence>
                {quizSubmitted && (
                  <motion.div 
                    className={`p-4 border-t ${
                      theme === 'dark' 
                        ? isCorrect ? 'border-green-700/50 bg-green-900/10' : 'border-red-700/50 bg-red-900/10' 
                        : isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                    }`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start">
                      <div className={`p-1 rounded-full mr-2 flex-shrink-0 ${
                        theme === 'dark'
                          ? isCorrect ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
                          : isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {isCorrect ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                      <p className={`text-sm ${
                        theme === 'dark'
                          ? isCorrect ? 'text-green-300' : 'text-red-300'
                          : isCorrect ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {isCorrect 
                          ? 'Correct! Well done.' 
                          : `Incorrect. The correct answer is: ${question.options[question.correctOptionIndex]}`
                        }
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      
      {/* Submit/Try Again Button */}
      <div className="mt-8 flex justify-center">
        {!quizSubmitted ? (
          <motion.button 
            onClick={handleSubmitQuiz}
            className={`px-8 py-3 rounded-xl text-white font-medium shadow-lg ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400' 
                : 'bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              <span>Submit Answers</span>
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </motion.button>
        ) : (
          <motion.button 
            onClick={resetQuiz}
            className={`px-8 py-3 rounded-xl font-medium shadow-lg ${
              theme === 'dark' 
                ? 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600' 
                : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200'
            } focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Try Again</span>
            </div>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default QuizSection;