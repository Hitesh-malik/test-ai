import React, { Suspense, useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import LoadingPlaceholder component
import LoadingPlaceholder from './LoadingPlaceholder';

interface SmoothTransitionWrapperProps {
  children: React.ReactNode;
  type?: 'threads' | 'section' | 'features' | 'importance' | 'cta';
  theme?: string;
  loadingDuration?: number; // Allow customizing loading time
}

/**
 * Improved SmoothTransitionWrapper component that provides smooth page transitions
 * with better detection of when content is fully loaded
 */
const SmoothTransitionWrapper: React.FC<SmoothTransitionWrapperProps> = ({ 
  children, 
  type = 'section',
  theme = 'dark',
  loadingDuration = 500 // Default to a shorter loading time (500ms)
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasLoadedOnce = useRef(false);
  
  // Fix NodeJS.Timeout type by using number instead (for browser setTimeout)
  const contentTimer = useRef<number | null>(null);
  const loadingTimer = useRef<number | null>(null);
  
  // Reset state when children change (for route changes)
  useEffect(() => {
    if (hasLoadedOnce.current) {
      // If we've loaded once before, use a much shorter loading time
      // for better perceived performance on subsequent navigations
      setIsLoading(true);
      setContentReady(false);
      
      // Clear any existing timers
      if (contentTimer.current) window.clearTimeout(contentTimer.current);
      if (loadingTimer.current) window.clearTimeout(loadingTimer.current);
      
      // Set much shorter timers for return visits
      contentTimer.current = window.setTimeout(() => {
        setContentReady(true);
        
        loadingTimer.current = window.setTimeout(() => {
          setIsLoading(false);
        }, 100); // Very short transition for better UX
      }, 100); // Barely noticeable loading for return visits
    } else {
      // First time loading this component
      setIsLoading(true);
      setContentReady(false);
      
      // Clear any existing timers
      if (contentTimer.current) window.clearTimeout(contentTimer.current);
      if (loadingTimer.current) window.clearTimeout(loadingTimer.current);
      
      // Set initial loading timers
      contentTimer.current = window.setTimeout(() => {
        setContentReady(true);
        
        loadingTimer.current = window.setTimeout(() => {
          setIsLoading(false);
          hasLoadedOnce.current = true;
        }, 300); // Shorter fade-out transition
      }, loadingDuration); // Initial loading duration
    }
    
    // Cleanup function to clear timers on unmount
    return () => {
      if (contentTimer.current) window.clearTimeout(contentTimer.current);
      if (loadingTimer.current) window.clearTimeout(loadingTimer.current);
    };
  }, [children, loadingDuration]);
  
  // This effect runs after the component has mounted and actually rendered to the DOM
  // It helps detect when the real content is actually visible
  useEffect(() => {
    // If content is ready and we're still showing loader, check if we can see the content
    if (contentReady && isLoading && contentRef.current) {
      // Use requestAnimationFrame to wait for next paint cycle
      requestAnimationFrame(() => {
        // If content has height, we know it's rendered
        if (contentRef.current && contentRef.current.offsetHeight > 0) {
          // Hide loader immediately
          setIsLoading(false);
          hasLoadedOnce.current = true;
          
          // Clear any pending timers
          if (loadingTimer.current) {
            window.clearTimeout(loadingTimer.current);
            loadingTimer.current = null;
          }
        }
      });
    }
  }, [contentReady, isLoading]);
  
  // Animation variants for transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 } // Faster transition
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 } // Faster exit
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 5 }, // Smaller y movement
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3, // Faster transition
        ease: "easeOut"
      } 
    }
  };
  
  return (
    <div className="relative w-full h-full">
      {/* Loading overlay with nice transition */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div 
            className="absolute inset-0 z-20"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <LoadingPlaceholder type={type} theme={theme} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Content with fade-in effect */}
      <motion.div 
        ref={contentRef}
        initial="hidden"
        animate={contentReady ? "visible" : "hidden"}
        variants={contentVariants}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </motion.div>
    </div>
  );
};

export default SmoothTransitionWrapper;