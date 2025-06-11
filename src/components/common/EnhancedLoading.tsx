import React, { useEffect, useState } from 'react';

interface EnhancedLoadingProps {
  theme: string;
  type?: 'threads' | 'section' | 'features' | 'importance' | 'cta';
  height?: string;
  isLoading: boolean;
  children: React.ReactNode;
}

// Placeholder patterns for different sections
const placeholderPatterns = {
  // Existing placeholder content logic moved to a separate component
};

const LoadingPlaceholderContent: React.FC<{
  type: 'threads' | 'section' | 'features' | 'importance' | 'cta';
  theme: string;
}> = ({ type, theme }) => {
  // Base classes that apply to all placeholder types
  
  // Content-specific styling based on the placeholder type
  switch (type) {
    case 'features':
      return (
        <div className="py-16 px-4">
          {/* Section title */}
          <div className="h-8 w-64 mx-auto mb-6 rounded bg-gray-700/50 animate-pulse"></div>
          {/* Description text */}
          <div className="h-4 w-3/4 mx-auto mb-2 rounded bg-gray-700/40 animate-pulse"></div>
          <div className="h-4 w-2/3 mx-auto mb-12 rounded bg-gray-700/40 animate-pulse"></div>
          
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="rounded-xl bg-gray-700/30 p-6 animate-pulse">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-purple-500/30 mx-auto mb-4"></div>
              {/* Title */}
              <div className="h-5 w-40 mx-auto mb-4 rounded bg-gray-600/50"></div>
              {/* Text */}
              <div className="h-3 w-full rounded bg-gray-600/40 mb-2"></div>
              <div className="h-3 w-full rounded bg-gray-600/40 mb-2"></div>
              <div className="h-3 w-4/5 rounded bg-gray-600/40"></div>
            </div>
            
            {/* Card 2 */}
            <div className="rounded-xl bg-gray-700/30 p-6 animate-pulse" style={{ animationDelay: '0.1s' }}>
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-pink-500/30 mx-auto mb-4"></div>
              {/* Title */}
              <div className="h-5 w-40 mx-auto mb-4 rounded bg-gray-600/50"></div>
              {/* Text */}
              <div className="h-3 w-full rounded bg-gray-600/40 mb-2"></div>
              <div className="h-3 w-full rounded bg-gray-600/40 mb-2"></div>
              <div className="h-3 w-4/5 rounded bg-gray-600/40"></div>
            </div>
            
            {/* Card 3 */}
            <div className="rounded-xl bg-gray-700/30 p-6 animate-pulse" style={{ animationDelay: '0.2s' }}>
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-blue-500/30 mx-auto mb-4"></div>
              {/* Title */}
              <div className="h-5 w-40 mx-auto mb-4 rounded bg-gray-600/50"></div>
              {/* Text */}
              <div className="h-3 w-full rounded bg-gray-600/40 mb-2"></div>
              <div className="h-3 w-full rounded bg-gray-600/40 mb-2"></div>
              <div className="h-3 w-4/5 rounded bg-gray-600/40"></div>
            </div>
          </div>
        </div>
      );
    
    case 'importance':
      return (
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="flex flex-col">
              {/* Title */}
              <div className="h-7 w-3/4 rounded bg-gray-700/50 animate-pulse mb-6"></div>
              {/* Description */}
              <div className="h-4 w-full rounded bg-gray-700/40 animate-pulse mb-2"></div>
              <div className="h-4 w-5/6 rounded bg-gray-700/40 animate-pulse mb-4"></div>
              
              {/* List items */}
              <div className="space-y-3 mt-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-start" style={{ animationDelay: `${item * 0.1}s` }}>
                    <div className="w-5 h-5 rounded-full bg-green-500/30 mr-2 flex-shrink-0"></div>
                    <div className="h-4 w-5/6 rounded bg-gray-700/40 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right column - visualization */}
            <div className="rounded-xl bg-gray-700/20 h-80 relative overflow-hidden">
              {/* Animated lines placeholders */}
              <div className="absolute w-full h-0.5 bg-purple-500/20 top-1/3 animate-pulse"></div>
              <div className="absolute w-full h-0.5 bg-blue-500/20 top-1/2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute w-full h-0.5 bg-pink-500/20 top-2/3 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              
              {/* Dots */}
              <div className="absolute w-3 h-3 rounded-full bg-purple-500/40 animate-pulse" style={{ top: '30%', left: '25%' }}></div>
              <div className="absolute w-3 h-3 rounded-full bg-blue-500/40 animate-pulse" style={{ top: '45%', left: '60%', animationDelay: '0.3s' }}></div>
              <div className="absolute w-3 h-3 rounded-full bg-pink-500/40 animate-pulse" style={{ top: '65%', left: '40%', animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>
      );
    
    case 'cta':
      return (
        <div className="py-16 px-4 text-center">
          {/* Title */}
          <div className="h-8 w-96 mx-auto mb-6 rounded bg-gray-700/50 animate-pulse"></div>
          
          {/* Description */}
          <div className="h-4 w-2/3 max-w-md mx-auto mb-2 rounded bg-gray-700/40 animate-pulse"></div>
          <div className="h-4 w-1/2 max-w-sm mx-auto mb-8 rounded bg-gray-700/40 animate-pulse"></div>
          
          {/* Button */}
          <div className="h-12 w-36 mx-auto rounded-xl bg-gradient-to-r from-purple-600/40 to-pink-500/40 animate-pulse"></div>
        </div>
      );
      
    case 'threads':
      return (
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full bg-gradient-to-br from-gray-800/30 to-gray-900/30"></div>
          <div className="absolute w-[60%] h-[60%] rounded-full blur-3xl bg-purple-500/10 animate-pulse" 
               style={{ top: '20%', left: '20%' }}></div>
          <div className="absolute w-[40%] h-[40%] rounded-full blur-3xl bg-pink-500/10 animate-pulse" 
               style={{ top: '30%', left: '50%', animationDelay: '0.5s' }}></div>
        </div>
      );
      
    default:
      return (
        <div className="p-8">
          <div className="h-8 w-2/3 mx-auto mb-4 rounded animate-pulse bg-gray-700/50"></div>
          <div className="h-4 w-3/4 mx-auto mb-3 rounded animate-pulse bg-gray-700/40"></div>
          <div className="h-4 w-2/3 mx-auto mb-8 rounded animate-pulse bg-gray-700/40"></div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="h-24 w-64 rounded-lg animate-pulse bg-gray-700/30"></div>
            <div className="h-24 w-64 rounded-lg animate-pulse bg-gray-700/30" style={{ animationDelay: '0.2s' }}></div>
            <div className="h-24 w-64 rounded-lg animate-pulse bg-gray-700/30" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      );
  }
};

/**
 * Enhanced loading component with smooth transitions
 */
const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({ 
  theme, 
  type = 'section', 
  height = 'h-screen', 
  isLoading,
  children 
}) => {
  // State to track whether the content should be visible
  const [contentVisible, setContentVisible] = useState(false);
  // State to track whether the placeholder should be visible
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  
  useEffect(() => {
    let contentTimer: NodeJS.Timeout;
    let placeholderTimer: NodeJS.Timeout;
    
    if (!isLoading) {
      // First start showing the content (behind the placeholder)
      setContentVisible(true);
      
      // Then after a short delay, fade out the placeholder
      contentTimer = setTimeout(() => {
        setPlaceholderVisible(false);
      }, 100);
    } else {
      // When loading starts, immediately show the placeholder
      setPlaceholderVisible(true);
      
      // And hide the content
      setContentVisible(false);
    }
    
    return () => {
      clearTimeout(contentTimer);
      clearTimeout(placeholderTimer);
    };
  }, [isLoading]);
  
  // Base classes for the container
  const baseClasses = `rounded-xl overflow-hidden ${theme === 'dark' ? 'bg-gray-800/20' : 'bg-gray-100/40'}`;
  
  // Add a floating animation for the loader
  const floatingAnimation = "animate-floating";

  return (
    <div className="relative">
      {/* The actual content */}
      <div 
        className={`transition-opacity duration-500 ease-in-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          position: contentVisible && placeholderVisible ? 'relative' : 'relative', 
          zIndex: contentVisible && !placeholderVisible ? 10 : 0
        }}
      >
        {children}
      </div>
      
      {/* The loading placeholder */}
      <div 
        className={`transition-all duration-500 ease-in-out ${placeholderVisible ? 'opacity-100' : 'opacity-0'} ${floatingAnimation}`}
        style={{ 
          position: contentVisible && placeholderVisible ? 'absolute' : 'relative',
          top: 0,
          left: 0,
          right: 0,
          zIndex: contentVisible && placeholderVisible ? 20 : 0,
          pointerEvents: placeholderVisible ? 'auto' : 'none'
        }}
      >
        <div className={`${baseClasses} ${height}`}>
          <LoadingPlaceholderContent type={type} theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default EnhancedLoading;