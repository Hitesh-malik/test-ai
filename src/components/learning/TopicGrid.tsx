// File: src/components/learning/TopicGrid.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { animationVariants } from './learningPathData';

interface TopicGridProps {
  topics: string[];
  selectedTopic: string;
  onTopicSelect: (topic: string) => void;
  onGeneratePath: () => void;
  isCreating: boolean;
  theme: string;
}

const TopicGrid: React.FC<TopicGridProps> = ({
  topics,
  selectedTopic,
  onTopicSelect,
  onGeneratePath,
  isCreating,
  theme
}) => {
  // Dynamic styles based on theme and selection
  const getTopicCardStyle = (topic: string) => {
    const isSelected = selectedTopic === topic;
    
    // Base styles
    const baseStyle = "p-4 rounded-lg cursor-pointer border transition-all duration-300 relative overflow-hidden";
    
    // Selection styles
    const selectedDarkStyle = "bg-purple-900/20 border-purple-600 text-purple-300 shadow-md";
    const selectedLightStyle = "bg-purple-100 border-purple-400 text-purple-800 shadow-md";
    
    // Normal styles
    const normalDarkStyle = "bg-gray-800 border-gray-700 hover:bg-purple-700";
    const normalLightStyle = "bg-white border-gray-200 hover:bg-purple-300";
    
    // Combine styles based on theme and selection state
    if (isSelected) {
      return `${baseStyle} ${theme === 'dark' ? selectedDarkStyle : selectedLightStyle}`;
    } else {
      return `${baseStyle} ${theme === 'dark' ? normalDarkStyle : normalLightStyle}`;
    }
  };
  
  // Icon container styles
  const getIconContainerStyle = (topic: string) => {
    const isSelected = selectedTopic === topic;
    
    // Base styles
    const baseStyle = "w-6 h-6 mt-0.5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300";
    
    // Selection styles
    const selectedDarkStyle = "bg-purple-700 text-purple-100";
    const selectedLightStyle = "bg-purple-600 text-white";
    
    // Normal styles
    const normalDarkStyle = "bg-gray-700 text-gray-400";
    const normalLightStyle = "bg-gray-100 text-gray-400";
    
    // Combine styles based on theme and selection state
    if (isSelected) {
      return `${baseStyle} ${theme === 'dark' ? selectedDarkStyle : selectedLightStyle}`;
    } else {
      return `${baseStyle} ${theme === 'dark' ? normalDarkStyle : normalLightStyle}`;
    }
  };
  
  // Text styles
  const getTextStyle = (topic: string) => {
    const isSelected = selectedTopic === topic;
    
    // Base styles
    const baseStyle = "ml-3 transition-all duration-300";
    
    // Selection styles
    const selectedDarkStyle = "text-purple-300 font-medium";
    const selectedLightStyle = "text-purple-800 font-medium";
    
    // Normal styles
    const normalDarkStyle = "text-gray-300";
    const normalLightStyle = "text-gray-700";
    
    // Combine styles based on theme and selection state
    if (isSelected) {
      return `${baseStyle} ${theme === 'dark' ? selectedDarkStyle : selectedLightStyle}`;
    } else {
      return `${baseStyle} ${theme === 'dark' ? normalDarkStyle : normalLightStyle}`;
    }
  };
  
  // Button styles
const getButtonStyle = () => {
  const baseStyle =
    "font-semibold shadow-lg transition-all duration-300 relative overflow-hidden rounded-lg text-white tracking-wide px-8 py-4 text-lg";
  
  const gradientStyle =
    "bg-gradient-to-r from-orange-500 via-red-500 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-red-700";

  const fontStyle = "font-sans"; // You can change this to `font-serif` or a custom Tailwind font class if added.

  return `${baseStyle} ${gradientStyle} ${fontStyle}`;
};

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      variants={animationVariants.item}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Choose Your Learning Topic
        </h2>
        {false && selectedTopic && (
        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={onGeneratePath}
            disabled={isCreating}
            className={`px-8 py-4 rounded-lg text-lg w-full max-w-md ${getButtonStyle()}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isCreating ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Your Personalized Course...
              </span>
            ) : (
              <div className="flex items-center justify-center">
                Generate My Learning Path
              </div>
            )}
          </motion.button>
        </motion.div>
      )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            onClick={() => onTopicSelect(topic)}
            className={getTopicCardStyle(topic)}
            variants={animationVariants.card} 
            initial={{ opacity: 0, y: 20 }}
            transition={{
              delay: index * 0.03,
              duration: 0.3
            }}
          >
            {/* Left border indicator for selected topics */}
            {selectedTopic === topic && (
              <div 
                className={`absolute left-0 top-0 bottom-0 w-1 ${
                  theme === 'dark' ? 'bg-purple-500' : 'bg-purple-600'
                }`}
              ></div>
            )}
            
            <div className="flex items-start pl-1">
              <div className={getIconContainerStyle(topic)}>
                {selectedTopic === topic ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                )}
              </div>
              <span className={getTextStyle(topic)}>
                {topic}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedTopic && (
        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={onGeneratePath}
            disabled={isCreating}
            className={`px-8 py-4 rounded-lg text-lg w-full max-w-md ${getButtonStyle()}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isCreating ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Your Personalized Course...
              </span>
            ) : (
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Generate My Learning Path for {selectedTopic}
              </div>
            )}
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TopicGrid;