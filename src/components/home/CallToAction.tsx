import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CallToActionProps {
  theme: string;
  authUtils: {
    isLoggedIn: () => boolean;
  };
}

const CallToAction: React.FC<CallToActionProps> = ({ theme, authUtils }) => {
  // Animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Custom background effect instead of Threads */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}></div>
        
        {/* Subtle radial gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 70% 50%, ${theme === 'dark' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.15)'} 0%, transparent 60%)`,
          }}
        ></div>
        
        {/* Additional accent gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 70%, ${theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.15)'} 0%, transparent 60%)`,
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Ready to Transform Your Learning Journey?
          </h2>
          {/* <p className={`text-xl mb-10 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Join thousands of learners who have discovered a better way to learn with
            AI-powered personalized education.
          </p> */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link 
              to={authUtils.isLoggedIn() ? "/dashboard" : "/login"}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;