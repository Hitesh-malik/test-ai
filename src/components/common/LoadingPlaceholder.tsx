import React, { useEffect, useState } from 'react';

interface LoadingPlaceholderProps {
  theme: string;
  type?: 'threads' | 'section' | 'features' | 'importance' | 'cta';
  height?: string;
  fullScreen?: boolean; // New prop to control full screen mode
}

/**
 * Improved LoadingPlaceholder component with a centered circular loader
 * that positions in the center of the window height
 */
const LoadingPlaceholder: React.FC<LoadingPlaceholderProps> = ({ 
  theme, 
  type = 'section', 
  height = 'h-screen', // Changed to h-screen for window height
  fullScreen = true // Default to full screen
}) => {
  // Add state to track window height for mobile browsers
  const [windowHeight, setWindowHeight] = useState('100vh');
  
  // Update window height on mount to handle mobile browsers more accurately
  useEffect(() => {
    setWindowHeight(`${window.innerHeight}px`);
    
    const handleResize = () => {
      setWindowHeight(`${window.innerHeight}px`);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Theme-based colors
  const colors = {
    background: theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-50/30', // Slightly more visible background
    primary: theme === 'dark' ? 'border-purple-500' : 'border-purple-600',
    secondary: theme === 'dark' ? 'border-pink-500' : 'border-pink-600',
    text: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
  };
  
  // Determine positioning style
  const positionStyle = fullScreen
    ? { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 50 }
    : {};
  
  return (
    <div 
      className={`${fullScreen ? '' : `relative ${height}`} w-full flex items-center justify-center`}
      style={fullScreen ? { ...positionStyle, height: windowHeight } : {}}
    >
      {/* Display a subtle background overlay in full screen mode */}
      {fullScreen && (
        <div className={`absolute inset-0 ${colors.background} backdrop-blur-sm`}></div>
      )}
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Improved spinner with dual colors */}
        <div className="relative">
          {/* Outer spinner ring */}
          <div className={`w-12 h-12 rounded-full ${colors.primary} border-4 border-t-transparent animate-spin-slow opacity-80`}></div>
          
          {/* Inner spinner ring - opposite direction */}
          <div className={`w-8 h-8 rounded-full ${colors.secondary} border-4 border-b-transparent animate-spin-reverse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}></div>
          
          {/* Center dot */}
          <div className={`w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse`}></div>
        </div>
        
        {/* Pulsing loading text */}
        <div className={`mt-5 ${colors.text} text-sm font-medium flex space-x-1 items-center animate-pulse`}>
          <span>Loading</span>
          <span className="animate-bounce-dot delay-100">.</span>
          <span className="animate-bounce-dot delay-200">.</span>
          <span className="animate-bounce-dot delay-300">.</span>
        </div>
      </div>
      
      {/* CSS animations with improved timing */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Spinner animations */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        @keyframes bounce-dot {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        
        /* Custom animation classes */
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-bounce-dot {
          animation: bounce-dot 1.4s infinite;
        }
        
        /* Delay utilities */
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
      ` }} />
    </div>
  );
};

export default LoadingPlaceholder;