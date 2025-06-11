import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

interface GoogleFormButtonProps {
  formUrl: string;
}

export const GoogleFormButton = ({ formUrl }: GoogleFormButtonProps) => {
  const { theme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);
  
  const handleClick = () => {
    // Open the Google Form in a new tab
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        className={`p-3 rounded-full shadow-lg flex items-center justify-center ${
          theme === 'dark' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'
        } text-white relative`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Provide feedback"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      </motion.button>
      
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className={`absolute bottom-full right-0 mb-2 py-1 px-3 rounded shadow-md text-sm whitespace-nowrap ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
          >
            Provide Feedback
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};