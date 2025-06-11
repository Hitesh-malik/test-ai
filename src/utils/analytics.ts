// utils/analytics.ts
import ReactGA from 'react-ga4';

// Your Google Analytics Measurement ID
const MEASUREMENT_ID = 'G-WSG29V44W0';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
  
  if (import.meta.env.DEV) {
    console.log('Google Analytics initialized in debug mode with ID:', MEASUREMENT_ID);
  } else {
    console.log('Google Analytics initialized with ID:', MEASUREMENT_ID);
  }
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  ReactGA.send({ 
    hitType: "pageview", 
    page: path,
    title: title || document.title
  });
  
  if (import.meta.env.DEV) {
    console.log('GA: Page view tracked -', path);
  }
};

// Check if GA is initialized
export const isGAInitialized = () => {
  return !!MEASUREMENT_ID;
};