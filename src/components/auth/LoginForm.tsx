// src/components/auth/LoginForm.tsx
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FormInput from './FormInput';
import BrandLogo from './BrandLogo';
import { useAuth } from '../../context/AuthContext';
import ReactGA from 'react-ga4';

interface LoginFormProps {
  onSubmit: (formData: {
    username: string;
    email: string;
    password: string;
  }) => Promise<void>;
  isSubmitting: boolean;
  generalError: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isSubmitting,
  generalError
}) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{
    username?: string;
    // email?: string;
    password?: string;
    general?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<{
    google: boolean;
    github: boolean;
  }>({
    google: false,
    github: false
  });

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search
    });
  }, []);

  const validateForm = () => {
    const newErrors: {
      username?: string;
      // email?: string;
      password?: string;
    } = {};

    // Username validation
    if (!username.trim()) {
      newErrors.username = 'Username is required';
    } else if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Email validation
    // if (!email.trim()) {
    //   newErrors.email = 'Email is required';
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   newErrors.email = 'Email is invalid';
    // }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
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
      // Use the login function from AuthContext
      const result = await login(username, password, 'defaultThirdArgument');
      // Send login event to Google Analytics
      ReactGA.event({
        action: 'login clicked',
        category: 'login',
        label: username,
        value: 1,
      });

      if (result.success) {
        // Redirect to dashboard on successful login
        navigate('/dashboard');
      } else {
        // Handle error
        setErrors({
          general: result.message || 'Invalid username/email or password'
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

  const handleGoogleLogin = async () => {
    setSocialLoading(prev => ({ ...prev, google: true }));
    try {
      // Add your Google OAuth logic here
      // Example: window.location.href = '/auth/google';
      console.log('Google login initiated');

      // Send Google login event to Google Analytics
      ReactGA.event({
        action: 'google_login_clicked',
        category: 'social_login',
        label: 'google',
        value: 1,
      });

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
      setErrors({
        general: 'Google login failed. Please try again.'
      });
    } finally {
      setSocialLoading(prev => ({ ...prev, google: false }));
    }
  };

  const handleGithubLogin = async () => {
    setSocialLoading(prev => ({ ...prev, github: true }));
    try {
      // Add your GitHub OAuth logic here
      // Example: window.location.href = '/auth/github';
      console.log('GitHub login initiated');

      // Send GitHub login event to Google Analytics
      ReactGA.event({
        action: 'github_login_clicked',
        category: 'social_login',
        label: 'github',
        value: 1,
      });

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
      setErrors({
        general: 'GitHub login failed. Please try again.'
      });
    } finally {
      setSocialLoading(prev => ({ ...prev, github: false }));
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative pb-6" // Added bottom padding
    >
      {/* Back Button - Top Left */}
      <motion.button
        onClick={handleBackClick}
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute -top-[2.8rem] -left-[1.4rem] p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition-all duration-200 z-10"
        aria-label="Back to home"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </motion.button>

      <motion.div variants={itemVariants} className="mb-6 mt-4">
        <BrandLogo />
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
        <p className="text-white text-opacity-80">Sign in to continue your learning journey</p>
      </motion.div>

      {(errors.general || generalError) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-3 bg-red-500 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg"
        >
          <p className="text-red-100">{errors.general || generalError}</p>
        </motion.div>
      )}


      {/* Social Login Buttons - Improved for Mobile */}
      <motion.div variants={containerVariants} className="space-y-3 mb-6">
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGoogleLogin}
          disabled={socialLoading.google || socialLoading.github}
          className="w-full flex items-center justify-center px-4 sm:px-6 py-3 sm:py-3.5 bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-medium rounded-xl border border-white border-opacity-20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group backdrop-blur-sm"
        >
          {socialLoading.google ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="ml-2 text-sm sm:text-base">Signing in...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <span className="ml-2 sm:ml-3 text-sm sm:text-base font-medium group-hover:text-opacity-90 transition-all duration-200">
                <span className="xs:inline">Continue with Google</span>
                {/* <span className="xs:hidden">Google</span> */}
              </span>
            </div>
          )}
        </motion.button>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGithubLogin}
          disabled={socialLoading.github || socialLoading.google}
          className="w-full flex items-center justify-center px-4 sm:px-6 py-3 sm:py-3.5 bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-medium rounded-xl border border-white border-opacity-20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group backdrop-blur-sm"
        >
          {socialLoading.github ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="ml-2 text-sm sm:text-base">Signing in...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <span className="ml-2 sm:ml-3 text-sm sm:text-base font-medium group-hover:text-opacity-90 transition-all duration-200">
                <span className="xs:inline">Continue with GitHub</span>
                {/* <span className="hidden xs:hidden">GitHub</span> */}
              </span>
            </div>
          )}
        </motion.button>
      </motion.div>

      {/* Divider */}
      <motion.div variants={itemVariants} className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white border-opacity-20"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-transparent text-white text-opacity-60">Or continue with</span>
        </div>
      </motion.div>

      <motion.form variants={containerVariants} onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          id="username"
          label="Username"
          type="text"
          value={username}
          onChange={setUsername}
          error={errors.username}
          placeholder="Your username"
          icon={
            <svg className="h-5 w-5 text-white text-opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          }
          variants={itemVariants}
        />

        {/* <FormInput
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
        /> */}

        <FormInput
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          error={errors.password}
          placeholder="••••••••"
          icon={
            <svg className="h-5 w-5 text-white text-opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          }
          variants={itemVariants}
        />

        {/* <motion.div variants={itemVariants} className="flex items-center justify-between">
          <Link to="/forgot-password" className="text-sm text-white hover:text-purple-200 transition-colors">
            Forgot Password?
          </Link>
        </motion.div> */}

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading || isSubmitting || socialLoading.google || socialLoading.github}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {(loading || isSubmitting) ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </div>
          ) : 'Sign in'}
        </motion.button>

        <motion.div variants={itemVariants} className="mt-6 text-center">
          <p className="text-white text-opacity-70">
            Don't have an account?{' '}
            <Link to="/signup" className="text-white font-medium hover:text-purple-200 transition-colors">
              Sign up
            </Link>
          </p>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default LoginForm;