// components/common/AnalyticsTracker.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../../utils/analytics';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever location changes
    const path = location.pathname + location.search;
    trackPageView(path);
  }, [location]);

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;