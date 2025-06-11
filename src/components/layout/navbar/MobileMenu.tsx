// src/components/layout/navbar/MobileMenu.tsx
import { useRef, useEffect, JSX } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../../hooks/useTheme';
import UserAvatar from './UserAvatar';

interface NavItem {
  name: string;
  path: string;
  requiresAuth: boolean;
  icon?: JSX.Element;
}

interface MobileMenuProps {
  isAuthenticated: boolean;
  user: any | null;
  onClose: () => void;
  logout: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isAuthenticated, user, onClose, logout }) => {
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  // Define navigation links with authentication requirements
  const navLinks: NavItem[] = [
    {
      name: 'Home',
      path: '/',
      requiresAuth: false,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    },
    // {
    //   name: 'About',
    //   path: '/about',
    //   requiresAuth: false,
    //   icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    //     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    //   </svg>
    // },
    {
      name: 'Ask AI',
      path: '/askai',
      requiresAuth: true,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
      </svg>
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      requiresAuth: true,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    },
    {
      name: 'Generate Path',
      path: '/generatepath',
      requiresAuth: true,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
      </svg>
    },
  ];

  // Filter links based on authentication status
  const filteredLinks = navLinks.filter(link => !link.requiresAuth || isAuthenticated);

  // Handle sign out button click
  const handleSignOut = () => {
    logout(); // First logout the user
    onClose(); // Then close the menu
  };

  // Mobile menu animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.05 }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <motion.div
      className={`lg:hidden w-full ${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md shadow-lg`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      ref={menuRef}
    >
      <div className="container mx-auto px-4 py-4 max-h-[85vh] overflow-y-auto">
        {/* Theme Toggle Switch */}
        <motion.div 
          className="mb-4"
          variants={itemVariants}
        >
          <div className={`flex items-center justify-between p-3 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/80'
          }`}>
            <span className={`font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </span>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </motion.div>

        {/* User Profile Section (if authenticated) */}
        {isAuthenticated && user && (
          <motion.div
            className={`mb-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/80'} flex items-center`}
            variants={itemVariants}
          >
            <UserAvatar user={user} size="md" />
            <div className="ml-3">
              <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {user.username || 'User'}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {user.email || ''}
              </p>
            </div>
          </motion.div>
        )}

        {/* Navigation Links */}
        <nav className="space-y-1">
          {filteredLinks.map((link) => (
            <motion.div
              key={link.path}
              variants={itemVariants}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) => `
                  flex items-center px-4 py-3 rounded-md text-base font-medium
                  ${isActive
                    ? theme === 'dark'
                      ? 'text-purple-400 bg-gray-800/70'
                      : 'text-purple-600 bg-gray-100'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100/80'
                  }
                  transition-colors duration-200
                `}
                onClick={onClose}
              >
                <span className="mr-3">{link.icon}</span>
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Auth Buttons (if not authenticated) */}
        {!isAuthenticated && (
          <motion.div
            className="mt-6 space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700"
            variants={itemVariants}
          >
            <Link
              to="/login"
              className={`
                block w-full text-center px-4 py-3 rounded-md font-medium
                ${theme === 'dark'
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                transition-colors duration-200
              `}
              onClick={onClose}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className={`
                block w-full text-center px-4 py-3 rounded-md font-medium
                ${theme === 'dark'
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                transition-colors duration-200
              `}
              onClick={onClose}
            >
              Sign up
            </Link>
          </motion.div>
        )}

        {/* Profile Actions (if authenticated) */}
        {isAuthenticated && (
          <motion.div
            className="mt-6 space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700"
            variants={itemVariants}
          >
            <Link
              to="/profile"
              className={`
                flex items-center px-4 py-3 rounded-md font-medium
                ${theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100/80'}
                transition-colors duration-200
              `}
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Profile
            </Link>
            <button
              className={`
                w-full flex items-center px-4 py-3 rounded-md font-medium
                ${theme === 'dark'
                  ? 'text-red-400 hover:text-red-300 hover:bg-gray-800/50'
                  : 'text-red-600 hover:text-red-500 hover:bg-gray-100/80'}
                transition-colors duration-200
              `}
              onClick={handleSignOut}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
              </svg>
              Sign out
            </button>
          </motion.div>   
        )}
      </div>
    </motion.div>
  );
};

export default MobileMenu;