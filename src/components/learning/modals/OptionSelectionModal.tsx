// File: src/components/learning/modals/OptionSelectionModal.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { animationVariants } from '../learningPathData';

interface OptionSelectionModalProps {
  selectedSubject: string;
  onOptionSelect: (option: 'scratch' | 'assessment') => void;
  onClose: () => void;
  theme: string;
}

const OptionSelectionModal: React.FC<OptionSelectionModalProps> = ({
  selectedSubject,
  onOptionSelect,
  onClose,
  theme
}) => {
  console.log(selectedSubject," selectedSubject")
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      variants={animationVariants.backdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <motion.div 
        className={`relative max-w-md w-full rounded-xl overflow-hidden ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}
        variants={animationVariants.modal}
      >
        <div className={`px-6 py-5 ${theme === 'dark' ? 'border-b border-gray-700' : 'border-b border-gray-200'}`}>
          <h3 className="text-xl font-semibold">Choose Your Path</h3>
        </div>
        
        <div className="p-6">
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            Would you like to start learning <span className="font-semibold">{selectedSubject}</span> from scratch, or would you prefer to check your knowledge level first?
          </p>
          
          <div className="space-y-4 mb-6">
            <motion.button
              onClick={() => onOptionSelect('scratch')}
              className={`w-full p-4 rounded-lg ${
                theme === 'dark' 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              } transition-colors flex items-start`}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className={`mr-4 p-2 rounded-full flex-shrink-0 mt-1 ${
                theme === 'dark' ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-600'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className={`text-lg font-medium mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Start from scratch
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Generate a complete learning path with no prior knowledge assumed
                </p>
              </div>
            </motion.button>

            <motion.button
              onClick={() => onOptionSelect('assessment')}
              className={`w-full p-4 rounded-lg ${
                theme === 'dark' 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              } transition-colors flex items-start`}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className={`mr-4 p-2 rounded-full flex-shrink-0 mt-1 ${
                theme === 'dark' ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-600'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className={`text-lg font-medium mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Check your knowledge
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Take a short assessment to help us tailor the learning path to your level
                </p>
              </div>
            </motion.button>
          </div>
          
          <div className="flex justify-end">
            <motion.button
              onClick={onClose}
              className={`px-5 py-2 rounded-md ${
                theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Cancel
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OptionSelectionModal;