// src/components/about/FeatureCard.tsx
import React, { JSX } from 'react';
import { motion } from 'framer-motion';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  theme: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, theme }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 0.15 * i
      } 
    }),
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className={`rounded-xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
      custom={index}
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="p-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
          theme === 'dark' 
            ? 'bg-purple-900/30 text-purple-400' 
            : 'bg-purple-100 text-purple-600'
        }`}>
          {React.cloneElement(feature.icon, { className: "h-6 w-6" })}
        </div>
        <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {feature.title}
        </h3>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
          {feature.description}
        </p>
       
      </div>
    </motion.div>
  );
};

export default FeatureCard;