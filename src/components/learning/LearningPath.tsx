// File: src/components/learning/LearningPath.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../context/AuthContext';
import apiService from '../../api/apiService';
import LoadingOverlay from '../common/LoadingOverlay';

// Import components
import TopicGrid from './TopicGrid';
import OptionSelectionModal from './modals/OptionSelectionModal';
import QuizModal from './modals/QuizModal';
import HowItWorks from './HowItWorks';

// Import types and services
import { animationVariants, suggestedSubjects } from './learningPathData';
import { ExperienceLevel } from './services/quizService';
import { showToast } from '../../utils/toastUtils';

const LearningPath: React.FC = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [creatingPath, setCreatingPath] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  
  // Free trial state
  const [showTrialNotice, setShowTrialNotice] = useState<boolean>(true);

  // Modal states
  const [modalStep, setModalStep] = useState<'closed' | 'optionSelection' | 'quiz'>('closed');
  
  // Quiz results
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>('beginner');
  const [beginnerScore, setBeginnerScore] = useState<number>(0);
  const [intermediateScore, setIntermediateScore] = useState<number | undefined>(undefined);

  const navigate = useNavigate();

  // Start the assessment flow
  const startAssessmentFlow = () => {
    if (!selectedSubject) {
      setError('Please select a topic to learn about');
      return;
    }  
    
    setError(null);
    setModalStep('optionSelection');
  };

  // Handle learning path option
  const handleLearningPathOption = (option: 'scratch' | 'assessment') => {
    if (option === 'scratch') {
      setModalStep('closed');
      generateLearningPath();
    } else {
      setModalStep('quiz');
    }
  };
  
  // Handle quiz completion
  const handleQuizComplete = (
    level: ExperienceLevel,
    beginnerScoreResult: number,
    intermediateScoreResult?: number
  ) => {
    setExperienceLevel(level);
    setBeginnerScore(beginnerScoreResult);
    if (intermediateScoreResult !== undefined) {
      setIntermediateScore(intermediateScoreResult);
    }
    
    // Close the quiz modal and generate learning path
    setModalStep('closed');
    generateLearningPath();
  };
  
  // Generate learning path with API call
  const generateLearningPath = async () => {
    try {
      setCreatingPath(true);
      setError(null);
      const quizeState = experienceLevel === 'beginner' ? 1 : 7;
      // Create API request with subject and knowledge level information
      const response = await apiService.aiCourses.createCourse(
        selectedSubject , quizeState
        // , 
        // {
        //   level: experienceLevel,
        //   beginnerScore,
        //   intermediateScore
        // }
      );

      if (response.success && response.data) {

        // Navigate to the course page with the data
        navigate(`/course/${response.data.title}`, { 
          state: { 
            courseData: response.data, 
            userLevel: experienceLevel, 
            beginnerScore,
            intermediateScore
          }, 
          replace: true
        });
      } else {
        showToast.error(response.error || 'Failed to generate learning path');
        setError(response.error || 'Failed to generate learning path');
      }
    } catch (err) {
      console.error('Error generating learning path:', err);
      setError('Failed to generate learning path. Please try again.');
    } finally {
      setCreatingPath(false);
    }
  };

  // Handle topic selection
  const handleTopicSelect = (topic: string) => {
    setSelectedSubject(topic);
  };

  // Close modal and reset
  const handleCloseModal = () => {
    setModalStep('closed');
  };
  

  if (loading) {
    return (
      <div className="min-h-screen bg-theme-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <LoadingOverlay isLoading={creatingPath} />
      
      {/* Assessment Modals */}
      <AnimatePresence>
        {modalStep === 'optionSelection' && (
          <OptionSelectionModal
            selectedSubject={selectedSubject}
            onOptionSelect={handleLearningPathOption}
            onClose={handleCloseModal}
            theme={theme}
          />
        )}
        {modalStep === 'quiz' && (
          <QuizModal
            selectedSubject={selectedSubject}
            onComplete={handleQuizComplete}
            onClose={handleCloseModal}
            theme={theme}
          />
        )}
      </AnimatePresence>
      
      <motion.div 
        className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} py-8`}
        variants={animationVariants.container}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Free Trial Notice */}
          {showTrialNotice && (
            <motion.div 
              className={`mb-8 rounded-lg shadow-sm overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-purple-900/30 to-indigo-900/20 border border-purple-800'
                  : 'bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className={`px-1 py-0.5 ${
                theme === 'dark' 
                  ? 'bg-purple-800/50' 
                  : 'bg-purple-200/50'
              }`}></div>
              
              <div className="p-4 flex items-start justify-between">
                <div className="flex">
                  <div className={`p-2 rounded-full mr-4 flex-shrink-0 ${
                    theme === 'dark' 
                      ? 'bg-purple-800/50 text-purple-200' 
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`font-medium ${
                      theme === 'dark' ? 'text-purple-200' : 'text-purple-900'
                    }`}>
                      Trial Access
                    </p>
                    <p className={`mt-1 ${
                      theme === 'dark' ? 'text-purple-300/90' : 'text-purple-700'
                    }`}>
                      You are currently in the trial period.
                    </p>
                    <p className={`text-sm mt-1 ${
                      theme === 'dark' ? 'text-purple-300/70' : 'text-purple-600'
                    }`}>
                      You can generate up to <span className="font-medium">3</span> learning paths with your trial account.
                    </p>
                  </div>
                </div>
                
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  theme === 'dark'
                    ? 'bg-purple-800/50 text-purple-200'
                    : 'bg-purple-100 text-purple-700'
                }`}>
                  Trial
                </div>
              </div>
              
            </motion.div>
          )}

          <motion.div className="text-center mb-10" variants={animationVariants.item}>
            <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-3`}>
              Your AI Learning Path
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Choose a topic below, and our AI will design a personalized course just for you
            </p>
          </motion.div>
 
          {/* Main Topics Section */}
          <TopicGrid
            topics={suggestedSubjects}
            selectedTopic={selectedSubject}
            onTopicSelect={handleTopicSelect}
            onGeneratePath={startAssessmentFlow}
            isCreating={creatingPath}
            theme={theme}
          />
          
          {/* How it works section */}
          <HowItWorks theme={theme} />
        </div>
      </motion.div>
    </>
  );
};

export default LearningPath;