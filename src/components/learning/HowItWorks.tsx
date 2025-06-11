// src/components/learning/HowItWorks.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { animationVariants } from './learningPathData';

interface HowItWorksProps {
  theme: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ theme }) => {
  const steps = [
    {
      number: 1,
      title: "Choose a Topic",
      description: "Select a topic you want to learn about from our curated list of subjects."
    },
    {
      number: 2,
      title: "AI Generates Your Course",
      description: "Our AI analyzes your selection and creates a structured learning path with modules and lessons."
    },
    {
      number: 3,
      title: "Start Learning",
      description: "Begin your personalized learning journey with interactive lessons, quizzes, and examples."
    }
  ];

  return (
    <motion.div 
      className="max-w-4xl mx-auto mt-16"
      variants={animationVariants.item}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h3 className="text-xl font-semibold mb-8 text-center"
          style={{ color: 'var(--color-primary)' }}>
        How It Works
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step) => (
          <motion.div 
            key={step.number}
            className="p-6 rounded-xl transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
            style={{ 
              backgroundColor: 'var(--color-bg-secondary)',
              borderColor: 'var(--color-border)',
              borderWidth: '1px',
              boxShadow: theme === 'dark' ? 'var(--shadow-sm)' : 'var(--shadow-md)'
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * step.number }}
          >
            {/* Background gradient accent */}
            <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full opacity-20 transition-opacity duration-300 group-hover:opacity-30"
              style={{
                background: `linear-gradient(to bottom right, var(--color-primary), var(--color-primary-dark))`,
                filter: 'blur(8px)'
              }}
            />

            {/* Step number with gradient background */}
            <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full mb-4 text-xl font-bold"
              style={{
                background: `linear-gradient(to right, var(--color-primary), var(--color-primary-dark))`,
                color: 'white',
                boxShadow: theme === 'dark' 
                  ? 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25)' 
                  : 'var(--shadow-md)'
              }}
            >
              {step.number}
            </div>
            
            <h4 className="relative z-10 text-lg font-semibold mb-3"
                style={{ color: 'var(--color-primary)' }}>
              {step.title}
            </h4>
            
            <p className="relative z-10"
               style={{ color: 'var(--color-text-secondary)' }}>
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HowItWorks;