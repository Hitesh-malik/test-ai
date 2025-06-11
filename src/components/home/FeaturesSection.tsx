import React from 'react';
import { motion } from 'framer-motion';

interface FeaturesSectionProps {
  theme: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ theme }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Why Telusko AI Learning?
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Our AI-powered learning platform analyzes your skills, goals, and learning style to create 
            customized learning paths that optimize your educational journey. Unlike generic courses, 
            Telusko adapts to your unique needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          <motion.div 
            variants={itemVariants} 
            className={`p-8 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} transform transition-all hover:scale-105`}
          >
            <div className="w-16 h-16 mb-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Personalized Learning</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Our algorithms analyze your learning style, pace, and preferences to create 
              truly customized learning experiences that maximize your potential.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className={`p-8 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} transform transition-all hover:scale-105`}
          >
            <div className="w-16 h-16 mb-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Adaptive Curriculum</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              As you progress, our system adapts content difficulty and focus areas based 
              on your performance, ensuring you're always challenged but never overwhelmed.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className={`p-8 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} transform transition-all hover:scale-105`}
          >
            <div className="w-16 h-16 mb-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Progress Tracking</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {/* Track your learning journey with detailed analytics, milestones, and achievements
              that keep you motivated and help you understand your growth. */}
              Stay on top of your learning journey with powerful, in-depth analytics that track your progress help you achieve your goals faster
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;