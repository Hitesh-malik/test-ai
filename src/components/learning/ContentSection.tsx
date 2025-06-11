// src/components/learning/ContentSection.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface ContentSectionProps {
  content: string;
  theme: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ content, theme }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Function to copy code to clipboard
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  // Keep track of code block index for unique identification
  let codeBlockIndex = 0;

  // Define custom renderers for markdown elements
  const components = {
    h1: ({ node, ...props }: any) => (
      <h1 
        className={`text-3xl font-bold my-6 pb-2 border-b ${
          theme === 'dark' 
            ? 'border-gray-700 text-purple-100' 
            : 'border-gray-200 text-gray-900'
        }`} 
        {...props} 
      />
    ),
    h2: ({ node, ...props }: any) => (
      <h2 
        className={`text-2xl font-bold mt-6 mb-3 ${
          theme === 'dark' 
            ? 'text-purple-50' 
            : 'text-gray-800'
        }`} 
        {...props} 
      />
    ),
    h3: ({ node, ...props }: any) => (
      <h3 
        className={`text-xl font-semibold mt-5 mb-3 ${
          theme === 'dark' 
            ? 'text-indigo-100' 
            : 'text-gray-700'
        }`} 
        {...props} 
      />
    ),
    p: ({ node, ...props }: any) => (
      <p 
        className={`my-4 leading-relaxed ${
          theme === 'dark' 
            ? 'text-gray-200' 
            : 'text-gray-700'
        }`} 
        {...props} 
      />
    ),
    ul: ({ node, ...props }: any) => (
      <ul 
        className="list-disc pl-6 my-4 space-y-2" 
        {...props} 
      />
    ),
    ol: ({ node, ...props }: any) => (
      <ol 
        className="list-decimal pl-6 my-4 space-y-2" 
        {...props} 
      />
    ),
    li: ({ node, ...props }: any) => (
      <li 
        className={`mb-1 ${
          theme === 'dark' 
            ? 'text-gray-200' 
            : 'text-gray-700'
        }`} 
        {...props} 
      />
    ),
    a: ({ node, ...props }: any) => (
      <a 
        className={`${
          theme === 'dark' 
            ? 'text-purple-400 hover:text-purple-300' 
            : 'text-blue-600 hover:text-blue-500'
        } underline`} 
        {...props} 
      />
    ),
    blockquote: ({ node, ...props }: any) => (
      <blockquote 
        className={`border-l-4 pl-4 py-2 my-4 ${
          theme === 'dark' 
            ? 'border-purple-700 text-gray-300 bg-purple-900/20' 
            : 'border-gray-300 text-gray-600 bg-gray-50'
        } rounded-r`} 
        {...props} 
      />
    ),
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      
      if (inline) {
        return (
          <code
            className={`px-1.5 py-0.5 mx-0.5 rounded font-mono text-sm ${
              theme === 'dark' 
                ? 'bg-gray-800 text-pink-300' 
                : 'bg-gray-100 text-pink-600'
            }`}
            {...props}
          >
            {children}
          </code>
        );
      } else {
        // Get current index and increment for the next block
        const currentIndex = codeBlockIndex++;
        const codeText = String(children).replace(/\n$/, '');
        
        return (
          <div className={`my-4 relative group ${
            theme === 'dark' 
              ? 'bg-gray-900 border border-gray-700' 
              : 'bg-gray-100 border border-gray-200'
          } rounded-lg overflow-hidden`}>
            {/* Language tag */}
            {/* {language && (
              <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-medium rounded-bl ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-gray-400' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {language}
              </div>
            )} */}
            
            {/* Copy button */}
            <button
              onClick={() => copyToClipboard(codeText, currentIndex)}
              className={`absolute top-2 right-2 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity ${
                theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              aria-label="Copy code"
            >
              {copiedIndex === currentIndex ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              )}
            </button>
            
            {/* Tooltip for copied status */}
            <AnimatePresence>
              {copiedIndex === currentIndex && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`absolute top-2 right-10 px-2 py-1 rounded text-xs ${
                    theme === 'dark' 
                      ? 'bg-gray-700 text-gray-200' 
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
            
            <pre className="p-4 pt-8 overflow-auto">
              <code className={`font-mono text-sm ${
                theme === 'dark' 
                  ? 'text-gray-200' 
                  : 'text-gray-800'
              }`} {...props}>
                {children}
              </code>
            </pre>
          </div>
        );
      }
    },
    strong: ({ node, ...props }: any) => (
      <strong 
        className={`font-bold ${
          theme === 'dark' 
            ? 'text-purple-100' 
            : 'text-gray-900'
        }`} 
        {...props} 
      />
    ),
    em: ({ node, ...props }: any) => (
      <em 
        className="italic" 
        {...props} 
      />
    ),
    table: ({ node, ...props }: any) => (
      <div className="overflow-x-auto my-6 rounded-lg">
        <table 
          className={`min-w-full border-collapse ${
            theme === 'dark' 
              ? 'border border-gray-700' 
              : 'border border-gray-200'
          }`} 
          {...props} 
        />
      </div>
    ),
    thead: ({ node, ...props }: any) => (
      <thead 
        className={`${
          theme === 'dark' 
            ? 'bg-gray-800' 
            : 'bg-gray-100'
        }`} 
        {...props} 
      />
    ),
    tbody: ({ node, ...props }: any) => (
      <tbody 
        className={`${
          theme === 'dark' 
            ? 'divide-y divide-gray-700' 
            : 'divide-y divide-gray-200'
        }`} 
        {...props} 
      />
    ),
    tr: ({ node, ...props }: any) => (
      <tr 
        className={`${
          theme === 'dark' 
            ? 'hover:bg-gray-800/50' 
            : 'hover:bg-gray-50'
        }`} 
        {...props} 
      />
    ),
    th: ({ node, ...props }: any) => (
      <th 
        className={`px-4 py-3 text-left text-sm font-medium ${
          theme === 'dark' 
            ? 'text-gray-200 bg-gray-800/70' 
            : 'text-gray-700'
        }`} 
        {...props} 
      />
    ),
    td: ({ node, ...props }: any) => (
      <td 
        className={`px-4 py-3 text-sm ${
          theme === 'dark' 
            ? 'text-gray-300' 
            : 'text-gray-800'
        }`} 
        {...props} 
      />
    ),
    hr: ({ node, ...props }: any) => (
      <hr 
        className={`my-6 ${
          theme === 'dark' 
            ? 'border-gray-700' 
            : 'border-gray-200'
        }`} 
        {...props} 
      />
    ),
  };

  return (
    <motion.div 
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="md-content">
        <ReactMarkdown components={components}>
          {content}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
};

export default ContentSection;