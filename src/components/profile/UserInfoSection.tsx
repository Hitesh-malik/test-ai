// src/components/profile/UserInfoSection.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../hooks/useTheme';
import apiService from '../../api/apiService';

const UserInfoSection: React.FC = () => {
  const { user, setUser } = useAuth();
  const { theme } = useTheme();
  const [originalForm, setOriginalForm] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    username: user?.username || '',
  });

  const [form, setForm] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    username: user?.username || '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  // Initialize original form data when user data changes
  useEffect(() => {
    if (user) {
      const userData = {
        fullName: user.fullName || '',
        email: user.email || '',
        username: user.username || '',
      };
      setOriginalForm(userData);
      setForm(userData);
    }
  }, [user]);

  // Check form validity
  useEffect(() => {
    // Form is valid when all three fields are filled
    const isValid = Boolean(
      form.fullName.trim() &&
      form.email.trim() &&
      form.username.trim()
    );
    setIsFormValid(isValid);
  }, [form]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    // Validate all fields are filled
    if (!isFormValid) {
      setError('Please fill out all fields before saving');
      return;
    }

    try {
      // Simulate API call to update profile
      setLoading(true);
      const profileInformation = await apiService.user.updateProfile(form);

      // If API returns success, update local storage
      if (profileInformation.success === true) {
        // Get current user data from localStorage
        const currentUserData = JSON.parse(localStorage.getItem('user') || '{}');

        // Update the relevant fields
        const updatedUserData = {
          ...currentUserData,
          fullName: profileInformation.data.fullName,
          username: profileInformation.data.username,
          email: profileInformation.data.email
        };
        setUser(updatedUserData); // Update user in context

        // Save updated data back to localStorage
        localStorage.setItem('user', JSON.stringify(updatedUserData));

        // Update the original form state with the new values
        setOriginalForm({
          fullName: profileInformation.data.fullName,
          email: profileInformation.data.email,
          username: profileInformation.data.username,
        });

        setSuccess('Profile updated successfully!');
        setIsEditing(false);

        // Clear success message after 3 seconds
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(profileInformation.error || 'Failed to update profile. Please try again.');
      }
    } catch (err) {
      setError('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Toggle edit mode
  const toggleEdit = () => {
    if (isEditing) {
      // If canceling, reset form to original values
      setForm({ ...originalForm });
    }
    setIsEditing(!isEditing);
    setSuccess('');
    setError('');
  };

  // Get user initials for avatar placeholder
  const getUserInitials = () => {
    if (!form.fullName) return 'U';

    const nameParts = form.fullName.split(' ');
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }

    return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`p-8 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-900 border border-gray-800' : 'bg-white'}`}
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Personal Information</h2>
        <p className={`mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Manage your personal information 
        </p>
      </motion.div>

      {/* Success and Error Messages */}
      <AnimatePresence>
        {success && (
          <motion.div
            className={`mb-6 p-4 rounded-lg flex items-center ${theme === 'dark' ? 'bg-green-900/20 text-green-400 border border-green-800/30' : 'bg-green-100 text-green-700 border border-green-400'}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {success}
          </motion.div>
        )}

        {error && (
          <motion.div
            className={`mb-6 p-4 rounded-lg flex items-center ${theme === 'dark' ? 'bg-red-900/20 text-red-400 border border-red-800/30' : 'bg-red-100 text-red-700 border border-red-400'}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Profile Picture Section */}
        <motion.div variants={itemVariants} className="flex flex-col items-center space-y-4">
          {/* <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>Profile</label> */}
          <div className="relative">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 opacity-70 blur-md`}></div>
            <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-purple-600/80 to-blue-600/80 flex items-center justify-center text-white text-3xl font-bold border-4 border-gray-800">
              {getUserInitials()}
            </div>
          </div>
          <p className={`text-xs max-w-[160px] text-center ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
            Your profile
          </p>
        </motion.div>

        {/* Form Fields */}
        <div className="md:col-span-2 space-y-6">
          {/* Name Field */}
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
              Full Name<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              disabled={!isEditing}
              className={`
                w-full rounded-lg px-4 py-3 border bg-opacity-10
                ${theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-gray-200 focus:border-violet-500'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-violet-500'
                }
                ${(!isEditing || !isFormValid && !form.fullName) ? 'opacity-70' : ''}
                ${isEditing && !form.fullName ? 'border-red-500 ring-1 ring-red-500/30' : ''}
                focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition duration-200
              `}
              placeholder="John Doe"
              required
            />
            {isEditing && !form.fullName && (
              <p className="mt-1 text-sm text-red-500">Full name is required</p>
            )}
          </motion.div>

          {/* Username Field */}
          <motion.div variants={itemVariants}>
            <label htmlFor="username" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
              Username<span className="text-red-500 ml-1">*</span>
            </label>
            <div className={`
              w-full rounded-lg px-4 py-3 border bg-opacity-10 flex items-center
              ${theme === 'dark'
                ? 'bg-gray-800 border-gray-700 text-gray-200 focus-within:border-violet-500'
                : 'bg-white border-gray-300 text-gray-900 focus-within:border-violet-500'
              }
              ${(!isEditing || !isFormValid && !form.username) ? 'opacity-70' : ''}
              ${isEditing && !form.username ? 'border-red-500 ring-1 ring-red-500/30' : ''}
              focus-within:outline-none focus-within:ring-2 focus-within:ring-violet-500/30 transition duration-200
            `}>
              <span className={`mr-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>@</span>
              <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                disabled={!isEditing}
                className={`
                  flex-grow bg-transparent border-none p-0 focus:outline-none focus:ring-0
                  ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}
                `}
                placeholder="username"
                required
              />
            </div>
            {isEditing && !form.username && (
              <p className="mt-1 text-sm text-red-500">Username is required</p>
            )}
          </motion.div>

          {/* Email Field */}
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
              Email Address<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`
                w-full rounded-lg px-4 py-3 border bg-opacity-10
                ${theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-gray-200 focus:border-violet-500'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-violet-500'
                }
                ${(!isEditing || !isFormValid && !form.email) ? 'opacity-70' : ''}
                ${isEditing && !form.email ? 'border-red-500 ring-1 ring-red-500/30' : ''}
                focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition duration-200
              `}
              placeholder="john@example.com"
              required
            />
            {isEditing && !form.email && (
              <p className="mt-1 text-sm text-red-500">Email address is required</p>
            )}
          </motion.div>

          {/* Form Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-end gap-3 mt-8 pt-4 w-full"
          >
            {isEditing ? (
              <>
                {!loading && (
                  <button
                    type="button"
                    onClick={toggleEdit}
                    className={`
            px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200
            w-full sm:w-auto order-1 sm:order-none
            ${theme === 'dark'
                        ? 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
                      }
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
            hover:shadow-md
          `}
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  disabled={!isFormValid || loading}
                  className={`
          px-4 py-2.5 rounded-lg text-sm font-medium text-white w-full sm:w-auto mb-3 sm:mb-0
          ${isFormValid
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 cursor-pointer'
                      : 'bg-gradient-to-r from-violet-400 to-blue-400 cursor-not-allowed opacity-70'
                    }
          transition-all duration-200 shadow-md hover:shadow-lg transform hover:${isFormValid && !loading ? '-translate-y-0.5' : ''}
          flex items-center justify-center
        `}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : !isFormValid ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Save Changes
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={toggleEdit}
                className={`
        px-4 py-2.5 rounded-lg text-sm font-medium text-white w-full sm:w-auto
        bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700
        transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5
        flex items-center justify-center
      `}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Edit Profile
              </button>
            )}
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
};

export default UserInfoSection;