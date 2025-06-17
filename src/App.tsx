// App.tsx
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { router } from './routes';
import { Toaster } from 'react-hot-toast';
import { useTheme } from './hooks/useTheme';
import { initGA, isGAInitialized, trackPageView } from './utils/analytics';
 

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    // Initialize Google Analytics when app starts
    initGA();
    console.log('Google Analytics initialized',isGAInitialized());
    // Check if user is authenticated
    // Track initial page view
    trackPageView(window.location.pathname + window.location.search);
  }, []);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    
      <Toaster
        position="top-center"
        toastOptions={{
          // Default options for all toasts
          duration: 5000,
          style: {
            background: theme === 'dark' ? '#1F2937' : '#FFFFFF',
            color: theme === 'dark' ? '#F3F4F6' : '#1F2937',
          },
          // Customize different toast types
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10B981',
              secondary: 'white',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#EF4444',
              secondary: 'white',
            },
          },
        }}
      />
    </ThemeProvider>
  );
}

export default App;