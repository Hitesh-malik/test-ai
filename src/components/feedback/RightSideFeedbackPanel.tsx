// src/components/feedback/RightSideFeedbackPanel.tsx
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

interface RightSideFeedbackPanelProps {
    formUrl: string;
}

export const RightSideFeedbackPanel = ({ formUrl }: RightSideFeedbackPanelProps) => {
    const { theme } = useTheme();

    const handleRedirect = () => {
        window.open(formUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <motion.div
            className={`sticky top-24 rounded-xl shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } mb-6`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Background image with blur effect */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"

            ></div>

            <div className="p-6 relative z-10">
                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Your Feedback is Valuable
                </h3>
 

                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Help us improve your learning experience by sharing your thoughts and suggestions.
                </p>

                <motion.button
                    onClick={handleRedirect}
                    className="w-full text-center py-3 text-sm rounded-lg text-white bg-purple-600 hover:bg-purple-700 font-medium"
                    whileHover={{
                        scale: 1.03,
                        backgroundColor: theme === 'dark' ? '#7e22ce' : '#7e22ce',
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 20
                    }}
                >
                    Share Your Feedback
                </motion.button>
            </div>
        </motion.div>
    );
};