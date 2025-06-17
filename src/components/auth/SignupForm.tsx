import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FormInput from './FormInput';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import { useAuth } from '../../context/AuthContext';
import ReactGA from 'react-ga4';

interface SignupFormProps {
  onSubmit: (formData: {
    username: string;
    fullName: string;
    email: string;
    password: string;
    codingLevel: number;
  }) => Promise<void>;
  isSubmitting: boolean;
  generalError: string | null;
}

const SignupForm: React.FC<SignupFormProps> = ({
  onSubmit,
  isSubmitting,
  generalError
}) => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [codingLevel, setCodingLevel] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [errors, setErrors] = useState<{
    username?: string;
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    codingLevel?: string;
    terms?: string;
    general?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Map coding level string values to numerical values
  const codingLevelValues = {
    'beginner': 2,
    'intermediate': 6,
    'advanced': 10
  };

  // Dropdown options
  const codingLevelOptions = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const validateForm = () => {
    const newErrors: {
      username?: string;
      fullName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      codingLevel?: string;
      terms?: string;
    } = {};

    // Username validation
    if (!username.trim()) {
      newErrors.username = 'Username is required';
    } else if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      newErrors.username = 'Username can only contain letters, numbers, and underscores';
    }

    // Full name validation
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (passwordStrength < 30) {
      newErrors.password = 'Password is too weak';
    }

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Coding level validation
    if (!codingLevel) {
      newErrors.codingLevel = 'Please select your knowledge level';
    }

    // Terms validation
    if (!acceptTerms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      // Convert coding level from string to number using the mapping
      const codingLevelNumber = codingLevel ? codingLevelValues[codingLevel as keyof typeof codingLevelValues] : 0;
      // Send login event to Google Analytics
      ReactGA.event({
        action: 'signup clicked',
        category: 'signup',
        label: `${email} - ${username}  `,
        value: 1,
      });
      // Use the signup function from AuthContext
      const result = await signup({
        username,
        fullName,
        email,
        password,
        knowledgeLevel: codingLevelNumber // Pass the numerical value instead of the string
      });

      if (result.success) {
        // Redirect to login page with success message
        navigate('/dashboard');
      } else {
        // Handle error
        setErrors({
          general: result.message || 'Failed to create account. Please try again.'
        });
      }
    } catch (error) {
      setErrors({
        general: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  // Get selected level label
  const getSelectedLevelLabel = () => {
    const option = codingLevelOptions.find(option => option.value === codingLevel);
    return option ? option.label : 'Select your level';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        variants={itemVariants}
        className="text-2xl font-bold text-white mb-6"
      >
        Create your account
      </motion.h2>

      {(errors.general || generalError) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-3 bg-red-500 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg"
        >
          <p className="text-red-100">{errors.general || generalError}</p>
        </motion.div>
      )}

      <motion.form variants={containerVariants} onSubmit={handleSubmit} className="space-y-5">
        <FormInput
          id="username"
          label="Username"
          type="text"
          value={username}
          onChange={setUsername}
          error={errors.username}
          placeholder="Choose a username"
          icon={
            <svg className="h-5 w-5 text-white text-opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          }
          variants={itemVariants}
        />

        <FormInput
          id="fullname"
          label="Full Name"
          type="text"
          value={fullName}
          onChange={setFullName}
          error={errors.fullName}
          placeholder="Your full name"
          icon={
            <svg className="h-5 w-5 text-white text-opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          }
          variants={itemVariants}
        />

        <FormInput
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          error={errors.email}
          placeholder="your@email.com"
          icon={
            <svg className="h-5 w-5 text-white text-opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          }
          variants={itemVariants}
        />

        {/* // In your SignupForm.tsx, replace the dropdown section with: */}

        <FormInput
          id="coding-level"
          label="Your Knowledge Level"
          type="dropdown" // Custom type for UI logic
          value={codingLevel}
          onChange={setCodingLevel}
          error={errors.codingLevel}
          placeholder="Select your level"
          icon={
            <span className="text-white text-opacity-50">&lt;/&gt;</span>
          }
          variants={itemVariants}
          isDropdown={true}
          options={codingLevelOptions}
        />

        <motion.div variants={itemVariants}>
          <FormInput
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(value) => {
              setPassword(value);

              // Calculate password strength
              if (!value) {
                setPasswordStrength(0);
                return;
              }

              // Simple password strength calculation
              let strength = 0;

              // Length check
              if (value.length >= 8) strength += 1;
              if (value.length >= 12) strength += 1;

              // Character type checks
              if (/[A-Z]/.test(value)) strength += 1;
              if (/[a-z]/.test(value)) strength += 1;
              if (/[0-9]/.test(value)) strength += 1;
              if (/[^A-Za-z0-9]/.test(value)) strength += 1;

              // Normalize to 0-100
              setPasswordStrength(Math.min(100, Math.round((strength / 6) * 100)));
            }}
            error={errors.password}
            placeholder="••••••••"
            icon={
              <svg className="h-5 w-5 text-white text-opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            }
          />

          {password && (
            <PasswordStrengthMeter strength={passwordStrength} />
          )}
        </motion.div>

        <FormInput
          id="confirm-password"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          error={errors.confirmPassword}
          placeholder="••••••••"
          icon={
            <svg className="h-5 w-5 text-white text-opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          }
          variants={itemVariants}
        />

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading || isSubmitting}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {(loading || isSubmitting) ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating account...
            </div>
          ) : 'Create Account'}
        </motion.button>

        <motion.div variants={itemVariants} className="mt-6 text-center">
          <p className="text-white text-opacity-70">
            Already have an account?{' '}
            <Link to="/login" className="text-white font-medium hover:text-purple-200 transition-colors">
              Sign in
            </Link>
          </p>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default SignupForm;