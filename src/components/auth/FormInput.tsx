// src/components/auth/FormInput.tsx
import { ReactNode, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownOption {
  value: string;
  label: string;
}

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  icon?: ReactNode;
  variants?: any;
  // New dropdown props
  isDropdown?: boolean;
  options?: DropdownOption[];
  rightIcon?: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
  icon,
  variants,
  // Dropdown props
  isDropdown = false,
  options = [],
  rightIcon
}) => {
  // State to track password visibility and dropdown
  const [showPassword, setShowPassword] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  // Get selected option label (for dropdown)
  const getSelectedLabel = () => {
    if (!isDropdown) return value;
    const option = options.find(opt => opt.value === value);
    return option ? option.label : placeholder || 'Select an option';
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isDropdown) return;
    
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdown]);
  
  // Determine the input type
  const inputType = type === 'password' && showPassword ? 'text' : type;
  
  // Animation variants for dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };
  
  // Handlers to prevent copy/paste for password fields
  const handleCopy = (e: React.ClipboardEvent) => {
    if (type === 'password') {
      e.preventDefault();
      return false;
    }
  };
  
  const handlePaste = (e: React.ClipboardEvent) => {
    if (type === 'password') {
      e.preventDefault();
      return false;
    }
  };
  
  const handleCut = (e: React.ClipboardEvent) => {
    if (type === 'password') {
      e.preventDefault();
      return false;
    }
  };
  
  // Prevent context menu for password fields
  const handleContextMenu = (e: React.MouseEvent) => {
    if (type === 'password') {
      e.preventDefault();
      return false;
    }
  };
  
  return (
    <motion.div variants={variants}>
      <label htmlFor={id} className="block text-white text-opacity-90 text-sm font-medium mb-2">
        {label}
      </label>
      <div className="relative" ref={isDropdown ? dropdownRef : undefined}>
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        
        {/* Regular input */}
        {!isDropdown && (
          <input
            id={id}
            type={inputType}
            value={value}
            maxLength={type === 'password' ? 50 : 50}
            onChange={(e) => onChange(e.target.value)}
            onCopy={handleCopy}
            onPaste={handlePaste}
            onCut={handleCut}
            onContextMenu={handleContextMenu}
            className={`w-full ${icon ? 'pl-10' : 'pl-3'} pr-4 py-3 bg-black bg-opacity-30 border ${error ? 'border-red-400' : 'border-gray-300 border-opacity-20'} rounded-xl text-white placeholder-gray-300 placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200`}
            placeholder={placeholder}
          />
        )}
        
        {/* Dropdown input */}
        {isDropdown && (
          <>
            <div
              className={`w-full ${icon ? 'pl-10' : 'pl-3'} pr-10 py-3 bg-black bg-opacity-30 border ${error ? 'border-red-400' : 'border-gray-300 border-opacity-20'} rounded-xl text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className={`${!value ? 'text-gray-300 text-opacity-60' : 'text-white'}`}>
                {getSelectedLabel()}
              </span>
            </div>
            
            {/* Dropdown Menu */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute z-10 w-full mt-1 bg-purple-800 border border-gray-300 border-opacity-20 rounded-xl shadow-lg overflow-hidden"
                >
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className={`px-4 py-3 cursor-pointer transition-colors duration-150 ${
                        option.value === value
                          ? 'bg-purple-500 bg-opacity-20 text-white'
                          : 'text-white hover:bg-purple-100 hover:bg-opacity-20'
                      }`}
                      onClick={() => {
                        onChange(option.value);
                        setDropdownOpen(false);
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
        
        {/* Password visibility toggle button */}
        {type === 'password' && !isDropdown && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-white text-opacity-50 hover:text-opacity-90 focus:outline-none transition-opacity duration-200"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              // Eye open icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            ) : (
              // Eye closed icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            )}
          </button>
        )}
        
        {/* Dropdown arrow or custom right icon */}
        {isDropdown && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {rightIcon || (
              <svg
                className={`h-5 w-5 text-white text-opacity-50 transition-transform duration-200 ${dropdownOpen ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        )}
      </div>
      
      {/* Error message */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 ml-1 text-sm text-red-300 font-medium"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

export default FormInput;