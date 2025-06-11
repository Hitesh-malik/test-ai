import React from 'react';
import { motion } from 'framer-motion';

interface ImportanceSectionProps {
  theme: string;
}

const ImportanceSection: React.FC<ImportanceSectionProps> = ({ theme }) => {
  // Animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={itemVariants} 
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className={`p-10 rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-purple-50 to-pink-50'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                The Importance of Personalized Learning
              </h2>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                In today's rapidly evolving world, traditional one-size-fits-all education is becoming obsolete. 
                Telusko leverages AI to create learning experiences that adapt to your unique needs, helping you:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Learn at your own pace without feeling rushed or held back</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Focus on content that matters most for your specific goals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Identify and overcome knowledge gaps with targeted resources</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Build on your existing strengths for more efficient learning</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              {/* Custom animated visualization instead of Threads */}
              <div className="w-full h-80 relative overflow-hidden rounded-xl">
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}></div>
                
                {/* Animated wave lines */}
                <svg 
                  viewBox="0 0 800 400" 
                  className="absolute inset-0 w-full h-full" 
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0,192L30,186.7C60,181,120,171,180,181.3C240,192,300,224,360,218.7C420,213,480,171,540,160C600,149,660,171,720,186.7C780,203,840,213,900,192C960,171,1020,117,1080,112C1140,107,1200,149,1260,160C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                    fill="none"
                    stroke={theme === 'dark' ? '#9f67ff' : '#7c3aed'}
                    strokeWidth="2"
                    className="opacity-40"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M0,224L30,218.7C60,213,120,203,180,186.7C240,171,300,149,360,149.3C420,149,480,171,540,186.7C600,203,660,213,720,197.3C780,181,840,139,900,149.3C960,160,1020,224,1080,250.7C1140,277,1200,267,1260,250.7C1320,235,1380,213,1410,202.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                    fill="none"
                    stroke={theme === 'dark' ? '#ec4899' : '#db2777'}
                    strokeWidth="2"
                    className="opacity-40"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.path
                    d="M0,96L30,112C60,128,120,160,180,165.3C240,171,300,149,360,128C420,107,480,85,540,101.3C600,117,660,171,720,197.3C780,224,840,224,900,218.7C960,213,1020,203,1080,176C1140,149,1200,107,1260,101.3C1320,96,1380,128,1410,144L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                    fill="none"
                    stroke={theme === 'dark' ? '#60a5fa' : '#3b82f6'}
                    strokeWidth="2"
                    className="opacity-40"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 1 }}
                  />
                </svg>
                
                {/* Dots representing learning nodes */}
                <motion.div
                  className="absolute w-4 h-4 rounded-full"
                  style={{ 
                    top: '30%', 
                    left: '25%', 
                    background: theme === 'dark' ? '#9f67ff' : '#7c3aed'
                  }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute w-3 h-3 rounded-full"
                  style={{ 
                    top: '60%', 
                    left: '40%', 
                    background: theme === 'dark' ? '#ec4899' : '#db2777'
                  }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute w-5 h-5 rounded-full"
                  style={{ 
                    top: '45%', 
                    left: '70%', 
                    background: theme === 'dark' ? '#60a5fa' : '#3b82f6' 
                  }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImportanceSection;