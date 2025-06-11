// src/components/dev/DevSignupLinkGenerator.tsx
import React, { useState, useEffect } from 'react';
import { generateSignupLink } from '../../utils/signupLinkGenerator';
import config from '../../config';

interface DevSignupLinkGeneratorProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const DevSignupLinkGenerator: React.FC<DevSignupLinkGeneratorProps> = ({ 
  position = 'bottom-right' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [signupLink, setSignupLink] = useState<string>('');
  const [isCopied, setIsCopied] = useState(false);
  const [isDev, setIsDev] = useState(false);
  
  // Determine if we're in development environment
  useEffect(() => {
    const isDevEnvironment = 
      process.env.NODE_ENV === 'development'
    
    setIsDev(isDevEnvironment);
  }, []);

  // Don't render anything in production
  if (!isDev) return null;

  const handleGenerateLink = () => {
    // const baseUrl = window.location.origin;
    const baseUrl = 'https://main.d1bumq85tweiaz.amplifyapp.com'; // Use the base URL from your config
    const link = generateSignupLink(baseUrl);
    setSignupLink(link);
    setIsCopied(false);
  };
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(signupLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Position styles
  const positionStyles = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  return (
    <div className={`fixed ${positionStyles[position]} z-50`}>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold p-2 rounded-full flex items-center justify-center shadow-lg"
        title="Dev Tools: Generate Signup Link"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </button>

      {/* Popup panel */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-yellow-100 px-4 py-2 border-b border-yellow-200">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-yellow-800">Dev Tools</h3>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-yellow-800 hover:text-yellow-900"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <h4 className="text-sm font-semibold mb-2">Generate 24hr Signup Link</h4>
            <p className="text-xs text-gray-600 mb-3">
              This tool is only visible in development mode. Generated links will expire after 24 hours.
            </p>
            
            <button 
              onClick={handleGenerateLink}
              className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors text-sm"
            >
              Generate New Link
            </button>
            
            {signupLink && (
              <div className="mt-3">
                <div className="flex items-center mt-2">
                  <input 
                    type="text" 
                    value={signupLink} 
                    readOnly 
                    className="flex-1 p-2 text-xs border rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50"
                  />
                  <button 
                    onClick={handleCopyLink}
                    className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-r text-xs transition-colors"
                  >
                    {isCopied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Link expires: {new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DevSignupLinkGenerator;