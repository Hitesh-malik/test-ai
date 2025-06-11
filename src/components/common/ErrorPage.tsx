 import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

/**
 * Error page component that handles rendering different types of routing errors
 * in a user-friendly way. Designed to be used with the errorElement prop in React Router.
 */
const ErrorPage: React.FC = () => {
  // Get the error that was thrown during routing or rendering
  const error = useRouteError();
  
  // Check if it's a route error response from React Router
  const isRouteError = isRouteErrorResponse(error);
  
  // Extract relevant information from the error
  let errorTitle = 'Something went wrong';
  let errorStatus = isRouteError ? `${error.status}` : 'Error';
  let errorMessage = 'An unknown error occurred';
  let errorDetail = '';
  
  // Determine error details based on error type
  if (isRouteError) {
    errorMessage = error.statusText || error.data?.message || 'Navigation error';
  } else if (error instanceof Error) {
    errorMessage = error.message;
    errorDetail = error.stack || '';
    
    // Handle specific types of errors
    if (errorMessage.includes('Failed to fetch dynamically imported module')) {
      errorTitle = 'Module Loading Failed';
      const moduleMatch = errorMessage.match(/http:\/\/.*\/(.+\.tsx)/);
      const moduleName = moduleMatch ? moduleMatch[1] : 'a module';
      errorDetail = `The application failed to load ${moduleName}. This could be due to:
      • The file might not exist at the specified path
      • There might be a syntax error in the file
      • The development server might need to be restarted`;
    }
  } else if (typeof error === 'string') {
    errorMessage = error;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-900/30 text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-4">{errorTitle}</h1>
        
        <div className="bg-red-900/20 border border-red-800/50 rounded-md p-4 mb-4">
          <p className="text-sm font-semibold text-red-300">{errorStatus}</p>
          <p className="text-sm text-red-200">{errorMessage}</p>
        </div>
        
        {errorDetail && (
          <div className="bg-gray-900/50 border border-gray-700 rounded-md p-4 mb-4 text-left overflow-auto max-h-48">
            <p className="text-xs text-gray-300 whitespace-pre-line">{errorDetail}</p>
          </div>
        )}
        
        <div className="flex flex-col space-y-2">
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition"
          >
            Reload Page
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;