// src/components/layout/Layout.tsx
import { Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import Navbar from './Navbar';
import Footer from './Footer';
import authUtils from '../../utils/authUtils';
import { GoogleFormButton } from '../feedback/GoogleFormButton';
import DevSignupLinkGenerator from '../dev/DevSignupLinkGenerator';

const Layout: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();

  // Pages that have their own full layouts
  const fullLayoutPages = ['/login', '/signup', '/forgot-password'];
  const isFullLayoutPage = fullLayoutPages.includes(location.pathname);
  // Replace this URL with your actual Google Form URL
  const googleFormUrl = 'https://forms.gle/Tvyu4tHWEviRMTqp8';
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      {/* Only show Navbar if it's not hidden by the page */}
      {!isFullLayoutPage && <Navbar />}
      {authUtils.isLoggedIn() && <GoogleFormButton formUrl={googleFormUrl} />}
      {/* For special pages like login, don't add any padding */}
      <main className={`flex-grow ${!isFullLayoutPage ? 'pt-16 md:pt-20' : ''}`}>
        <Outlet />
      </main>
      {/* Development-only signup link generator - only appears in dev mode */}
      {/* <DevSignupLinkGenerator position="bottom-right" /> */}
      {/* Only show Footer if it's not a full layout page */}
      {!isFullLayoutPage && <Footer />}
    </div>
  );
};

export default Layout;