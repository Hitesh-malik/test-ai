// src/components/common/AskAiLoadingOverlay.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

interface AskAiLoadingOverlayProps {
  isLoading: boolean;
  message?: string;
}

const AskAiLoadingOverlay: React.FC<AskAiLoadingOverlayProps> = ({ 
  isLoading,
  message
}) => {
  const { theme } = useTheme();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [nodes, setNodes] = useState<{ x: number; y: number; size: number }[]>([]);
  const [connections, setConnections] = useState<{ from: number; to: number }[]>([]);
  
  // Array of loading messages for AI gathering information
  const loadingMessages = [
    "Searching knowledge base...",
    "Analyzing your question...",
    "Gathering relevant information...",
    "Processing data from multiple sources...",
    "Connecting related concepts...",
    "Synthesizing a comprehensive answer...",
    "Validating information accuracy...",
    "Optimizing response clarity...",
    "Organizing thoughts coherently...",
    "Preparing your personalized response..."
  ];
  
  // If a custom message is provided, use it instead of the rotating ones
  const messagesToShow = message ? [message] : loadingMessages;
  
  // Change message every 3 seconds
  useEffect(() => {
    if (!isLoading) return;
    
    const intervalId = setInterval(() => {
      setCurrentMessageIndex(prevIndex => 
        (prevIndex + 1) % messagesToShow.length
      );
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, [isLoading, messagesToShow.length]);
  
  // Generate network nodes and connections on mount
  useEffect(() => {
    // Generate random nodes
    const nodeCount = 12;
    const newNodes = Array.from({ length: nodeCount }).map((_, i) => ({
      x: 40 + Math.random() * 320, // Keep nodes within a reasonable area
      y: 40 + Math.random() * 200,
      size: 3 + Math.random() * 6
    }));
    
    // Generate connections between nodes (not all nodes connected)
    const newConnections = [];
    for (let i = 0; i < nodeCount; i++) {
      // Each node connects to 1-3 other nodes
      const connectionCount = 1 + Math.floor(Math.random() * 3);
      
      for (let j = 0; j < connectionCount; j++) {
        let target = Math.floor(Math.random() * nodeCount);
        // Avoid self-connections
        while (target === i) {
          target = Math.floor(Math.random() * nodeCount);
        }
        
        newConnections.push({ from: i, to: target });
      }
    }
    
    setNodes(newNodes);
    setConnections(newConnections);
  }, []);
  
  // Don't render if not loading
  if (!isLoading) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Overlay background */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-900'} opacity-90`}></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-md">
        {/* Neural Network Animation */}
        <motion.div 
          className="mb-8 w-80 h-64 sm:w-96 sm:h-72 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Central "brain" or neural network */}
          <motion.div 
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full ${
              theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-700/20'
            } flex items-center justify-center z-10`}
            animate={{ 
              boxShadow: [
                "0 0 0 0px rgba(139, 92, 246, 0.3)",
                "0 0 0 15px rgba(139, 92, 246, 0)",
              ],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5,
              ease: "easeOut"
            }}
          >
            <svg className="w-14 h-14 sm:w-16 sm:h-16 text-purple-500" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                fill="currentColor"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path 
                d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" 
                fill="currentColor"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <motion.path 
                d="M20 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" 
                fill="currentColor"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
              <motion.path 
                d="M6 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" 
                fill="currentColor"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
              />
              <motion.path 
                d="M17.657 17.657a1 1 0 0 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z" 
                fill="currentColor"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
              />
              <motion.path 
                d="M7.757 7.757a1 1 0 0 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z" 
                fill="currentColor"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
              <motion.path 
                d="M7.757 16.243a1 1 0 1 0-1.414 1.414 1 1 0 0 0 1.414-1.414Z" 
                fill="currentColor"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.8 }}
              />
              <motion.path 
                d="M17.657 6.343a1 1 0 1 0-1.414 1.414 1 1 0 0 0 1.414-1.414Z" 
                fill="currentColor"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2.1 }}
              />
              <motion.circle 
                cx="12" 
                cy="12" 
                r="8" 
                stroke="currentColor" 
                strokeWidth="1.5"
                strokeOpacity="0.5"
                fill="none"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </motion.div>
          
          {/* Neural network nodes */}
          <svg width="100%" height="100%" className="absolute top-0 left-0">
            {/* Connections between nodes */}
            {connections.map((connection, idx) => {
              const fromNode = nodes[connection.from];
              const toNode = nodes[connection.to];
              
              return (
                <motion.line
                  key={`line-${idx}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={theme === 'dark' ? '#7c3aed' : '#8b5cf6'}
                  strokeWidth="1"
                  strokeOpacity="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{ 
                    duration: 1.5 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
            
            {/* Data transmission animations */}
            {connections.map((connection, idx) => {
              const fromNode = nodes[connection.from];
              const toNode = nodes[connection.to];
              
              return (
                <motion.circle
                  key={`pulse-${idx}`}
                  cx={fromNode.x}
                  cy={fromNode.y}
                  r={2}
                  fill={theme === 'dark' ? '#a855f7' : '#8b5cf6'}
                  initial={{ 
                    cx: fromNode.x,
                    cy: fromNode.y,
                    opacity: 0
                  }}
                  animate={{ 
                    cx: [fromNode.x, toNode.x],
                    cy: [fromNode.y, toNode.y],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: idx * 0.5,
                    ease: "easeInOut",
                    repeatDelay: Math.random() * 5 + 2
                  }}
                />
              );
            })}
            
            {/* Nodes */}
            {nodes.map((node, idx) => (
              <motion.circle
                key={`node-${idx}`}
                cx={node.x}
                cy={node.y}
                r={node.size}
                fill={theme === 'dark' ? '#a855f7' : '#8b5cf6'}
                animate={{
                  r: [node.size, node.size * 1.3, node.size],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
          
          {/* Information particles flowing toward center */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: 2 + Math.random() * 2,
                height: 2 + Math.random() * 2,
                backgroundColor: theme === 'dark' ? '#a855f7' : '#8b5cf6',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                top: ['100%', '50%'],
                left: ['100%', '50%'],
                opacity: [0, 1, 0],
                scale: [1, 1.5, 0.5]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                repeatDelay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-out-${i}`}
              className="absolute rounded-full"
              style={{
                width: 2 + Math.random() * 2,
                height: 2 + Math.random() * 2,
                backgroundColor: theme === 'dark' ? '#a855f7' : '#7c3aed',
                top: '50%',
                left: '50%',
              }}
              animate={{
                top: ['50%', Math.random() * 100 + '%'],
                left: ['50%', Math.random() * 100 + '%'],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 1]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3 + 2,
                repeatDelay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
        
        {/* Loading Text with message cycling animation */}
        <div className="h-16">
          <AnimatePresence mode="wait">
            <motion.h3 
              key={currentMessageIndex}
              className={`text-lg sm:text-xl font-medium mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-white'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {messagesToShow[currentMessageIndex]}
            </motion.h3>
          </AnimatePresence>
        </div>
        
        {/* Thinking dots */}
        <div className="flex space-x-2 mt-1">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: theme === 'dark' ? '#a855f7' : '#8b5cf6',
              }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3] 
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: dot * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Knowledge base progress indicator */}
        <div className="mt-8 w-full max-w-xs sm:max-w-sm flex items-center">
          <svg className="w-4 h-4 text-purple-300 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 19H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <motion.div 
            className={`flex-1 h-1.5 rounded-full overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-700'
            }`}
          >
            <motion.div 
              className="h-full"
              style={{
                background: theme === 'dark' 
                  ? 'linear-gradient(to right, #8b5cf6, #3b82f6)' 
                  : 'linear-gradient(to right, #a855f7, #3b82f6)'
              }}
              initial={{ width: '10%' }}
              animate={{ 
                width: ['10%', '30%', '45%', '60%', '75%', '90%', '100%']
              }}
              transition={{ 
                duration: 7,
                ease: "easeInOut",
                times: [0, 0.1, 0.2, 0.4, 0.6, 0.8, 1]
              }}
            />
          </motion.div>
        </div>
        
        <motion.p 
          className={`text-xs sm:text-sm mt-3 ${
            theme === 'dark' ? 'text-purple-200' : 'text-purple-100'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          AI assistant is processing your question
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AskAiLoadingOverlay;