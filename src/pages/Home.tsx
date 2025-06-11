import React, { lazy, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { useInView } from '../hooks/useInView';
import authUtils from '../utils/authUtils';
import SmoothTransitionWrapper from '../components/common/SmoothTransitionWrapper';

// Lazy load components
const FeaturesSection = lazy(() => import('../components/home/FeaturesSection'));
const ImportanceSection = lazy(() => import('../components/home/ImportanceSection'));
const CallToAction = lazy(() => import('../components/home/CallToAction'));

// Lightweight animated background component
const AnimatedBackground: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}></div>
      
      {/* Animated circles */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl"
        initial={{ x: '-20%', y: '-20%' }}
        animate={{ 
          x: ['20%', '-10%', '5%', '-20%'],
          y: ['-10%', '15%', '-5%', '-20%'],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          repeatType: "reverse", 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl"
        initial={{ right: '-10%', bottom: '-10%' }}
        animate={{ 
          right: ['5%', '-15%', '0%', '-10%'],
          bottom: ['0%', '-15%', '5%', '-10%'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />
    </div>
  );
};

const Home: React.FC = () => {
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Use intersection observer for sections
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [importanceRef, importanceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Hero animation variants
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };
  
  const heroItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div ref={scrollRef} className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      {/* Hero Section with Custom Animated Background */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground theme={theme} />
        
        {/* Content overlay */}
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-6xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
              variants={heroItemVariants}
            >
              Telusko AI Learning
            </motion.h1>
            
            <motion.p 
              className={`text-xl sm:text-2xl mb-10 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              variants={heroItemVariants}
            >
              Your AI-powered guide to personalized learning journeys tailored specifically for you
            </motion.p>
            
            <motion.div 
              variants={heroItemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link 
                to="/generatepath"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-xl hover:shadow-lg hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105 shadow-md"
              >
                Generate Your Path
              </Link>
              {/* <Link 
                to="/about"
                className={`px-8 py-4 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} font-medium rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105`}
              >
                Learn More
              </Link> */}
            </motion.div>
            
            <motion.div 
              variants={heroItemVariants}
              className="mt-8"
            >
              <motion.a 
                href="#features"
                className="flex justify-center items-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Using SmoothTransitionWrapper */}
      <div id="features" ref={featuresRef} className="min-h-[400px]">
        {featuresInView && (
          <SmoothTransitionWrapper type="features" theme={theme}>
            <FeaturesSection theme={theme} />
          </SmoothTransitionWrapper>
        )}
      </div>

      {/* Importance Section - Using SmoothTransitionWrapper */}
      <div ref={importanceRef} className="min-h-[300px]">
        {importanceInView && (
          <SmoothTransitionWrapper type="importance" theme={theme}>
            <ImportanceSection theme={theme} />
          </SmoothTransitionWrapper>
        )}
      </div>

      {/* CTA Section - Using SmoothTransitionWrapper */}
      <div ref={ctaRef} className="min-h-[250px]">
        {ctaInView && (
          <SmoothTransitionWrapper type="cta" theme={theme}>
            <CallToAction theme={theme} authUtils={authUtils} />
          </SmoothTransitionWrapper>
        )}
      </div>
    </div>
  );
};

// Add display name for better debugging
Home.displayName = 'HomePage';

// Use memo to prevent unnecessary re-renders
export default React.memo(Home);