import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import FeatureShowcase from '../components/auth/FeatureShowcase';
import SignupForm from '../components/auth/SignupForm';
import { useParams, useNavigate } from 'react-router-dom';
import LinkExpired from '../components/auth/LinkExpired';
import { isSignupLinkValid } from '../utils/signupLinkGenerator'; // Import the utility function

const Signup: React.FC = () => {
  const { theme } = useTheme();
  // const { encodedTimestamp } = useParams<{ encodedTimestamp: string }>();
  const [generalError, setGeneralError] = useState<string | null>(null);
  // const [isLinkValid, setIsLinkValid] = useState<boolean | null>(null);
  // const navigate = useNavigate();

  // useEffect(() => {
    // Validate the timestamp when component mounts
    // validateTimestamp();
  // }, [encodedTimestamp]);

  // const validateTimestamp = () => {
  //   // If there's no timestamp, set link as invalid
  //   if (!encodedTimestamp) {
  //     setIsLinkValid(false);
  //     return;
  //   }

  //   try {
  //     // Use the utility function instead of implementing the logic again
  //     const isValid = isSignupLinkValid(encodedTimestamp);
  //     setIsLinkValid(isValid);
  //   } catch (error) {
  //     console.error("Error validating signup link:", error);
  //     setIsLinkValid(false);
  //   }
  // };

  const handleSubmit = async (formData: {
    username: string;
    fullName: string;
    email: string;
    password: string;
    codingLevel: number;
  }) => {
    // No need to handle submission here as it's handled in the SignupForm component directly
  };

  // Return expired link component if link is invalid
  // if (isLinkValid === false) {
  //   return <LinkExpired />;
  // }

  // Show loading state while validating
  // if (isLinkValid === null) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
  //       <div className="animate-pulse text-white text-lg">Validating link...</div>
  //     </div>
  //   );
  // }

  return (
    <div className={`min-h-screen pt-16 flex items-center justify-center ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900' : 'bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600'} p-4 overflow-hidden`}>
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply opacity-20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply opacity-20 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-40 right-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply opacity-20 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <motion.div
        className="w-full max-w-5xl bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left side: Feature showcase */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-900 to-purple-900 p-8 md:p-12 relative">
          <FeatureShowcase />
        </div>

        {/* Right side: Signup form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <SignupForm 
            onSubmit={handleSubmit} 
            isSubmitting={false} 
            generalError={generalError}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;