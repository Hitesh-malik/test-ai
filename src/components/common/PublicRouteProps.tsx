import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface PublicRouteProps {
  redirectPath?: string;
}

/**
 * A wrapper component for public routes
 * Redirects to dashboard/home page if user is already authenticated
 */
const PublicRoute: React.FC<PublicRouteProps> = ({ 
  redirectPath = '/dashboard' 
}) => {
  const { isAuthenticated, isLoading } = useAuth();

  // While checking authentication status, show a loading indicator
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // If already authenticated, redirect to dashboard/home
  if (isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // If not authenticated, render the public routes (login/signup)
  return <Outlet />;
};

export default PublicRoute;