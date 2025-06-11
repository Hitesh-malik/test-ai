import { lazy, ReactNode, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SmoothTransitionWrapper from '../components/common/SmoothTransitionWrapper';
import ErrorPage from '../components/common/ErrorPage';
import AnalyticsTracker from '../components/common/AnalyticsTracker'; // Import the AnalyticsTracker

// Custom loading component that matches your app's theme
const LoadingFallback = ({ theme = 'dark' }) => (
  <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin" 
           style={{ borderColor: theme === 'dark' ? '#6366f1 transparent #6366f1 #6366f1' : '#4f46e5 transparent #4f46e5 #4f46e5' }}>
      </div>
      <p className="mt-4">Loading...</p>
    </div>
  </div>
);

// Lazy-loaded components with custom loading placeholders
const Home = lazy(() => import(/* webpackChunkName: "home" */ '../pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "about" */ '../pages/About'));
const Login = lazy(() => import(/* webpackChunkName: "login" */ '../pages/Login'));
const Signup = lazy(() => import(/* webpackChunkName: "signup" */ '../pages/Signup'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */ '../pages/NotFound'));
const Dashboard = lazy(() => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard'));
const Profile = lazy(() => import(/* webpackChunkName: "profile" */ '../pages/Profile'));
const Pricing = lazy(() => import(/* webpackChunkName: "pricing" */ '../pages/Pricing'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ '../pages/Contact'));

// Learning path components (grouped by feature)
const LearningPath = lazy(() => import(/* webpackChunkName: "learning-path" */ '../components/learning/LearningPath'));
const Course = lazy(() => import(/* webpackChunkName: "learning-course" */ '../components/learning/Course'));
const Modules = lazy(() => import(/* webpackChunkName: "learning-modules" */ '../components/learning/Modules'));
const Lessons = lazy(() => import(/* webpackChunkName: "learning-lessons" */ '../components/learning/Lessons'));
const LessonContent = lazy(() => import(/* webpackChunkName: "learning-content" */ '../components/learning/LessonContent'));
const AskAi = lazy(() => import(/* webpackChunkName: "learning-askai" */ '../components/learning/AskAi'));

// Import ProtectedRoute directly since it's a crucial part of the application structure
import ProtectedRoute from '../components/common/ProtectedRoute';

// Import AuthProvider directly as it's critical for app functionality
import { AuthProvider } from '../context/AuthContext';
import LinkExpired from '../components/auth/LinkExpired';
import PublicRoute from '../components/common/PublicRouteProps';

// Enhanced component wrapper that handles Suspense loading
const LazyLoadWrapper = ({ children, theme = 'dark' }: { children: ReactNode, theme?: 'dark' | 'light' }) => (
  <Suspense fallback={<LoadingFallback theme={theme} />}>
    <SmoothTransitionWrapper type="section" theme={theme}>
      {children}
    </SmoothTransitionWrapper>
  </Suspense>
);

// Root layout that provides the AuthProvider and Analytics tracking
const Root = () => {
  return (
    <AuthProvider>
      <AnalyticsTracker /> {/* Add analytics tracker here */}
      <Outlet />
    </AuthProvider>
  );
};

// Define all application routes with code splitting
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} errorElement={<ErrorPage />}>
      {/* Public routes */}
      <Route element={<Layout />} errorElement={<ErrorPage />}>

        <Route index element={
          <LazyLoadWrapper theme="dark">
            <Home />
          </LazyLoadWrapper>
        } />

        <Route element={<PublicRoute />} errorElement={<ErrorPage />}>
          <Route path="login" element={
            <LazyLoadWrapper theme="dark">
              <Login />
            </LazyLoadWrapper>
          } />

          {/* Fallback route for direct access without timestamp */}
          <Route path="signup" element={
            <LazyLoadWrapper theme="dark">
               <Signup />
            </LazyLoadWrapper>
          } />
        </Route>

        {/* Protected routes - Direct wrapper without nesting under 'protected' path */}
        <Route element={<ProtectedRoute />} errorElement={<ErrorPage />}>
          <Route path="generatepath" element={
            <LazyLoadWrapper theme="dark">
              <LearningPath />
            </LazyLoadWrapper>
          } />

          <Route path="askai" element={
            <LazyLoadWrapper theme="dark">
              <AskAi />
            </LazyLoadWrapper>
          } />

          <Route path="dashboard" element={
            <LazyLoadWrapper theme="dark">
              <Dashboard />
            </LazyLoadWrapper>
          } />

          <Route path="profile" element={
            <LazyLoadWrapper theme="dark">
              <Profile />
            </LazyLoadWrapper>
          } />

          {/* AI Course Learning routes */}
          <Route path="course/:title" element={
            <LazyLoadWrapper theme="dark">
              <Course />
            </LazyLoadWrapper>
          } />

          <Route path="course/:title/modules" element={
            <LazyLoadWrapper theme="dark">
              <Modules />
            </LazyLoadWrapper>
          } />

          <Route path="course/:title/modules/:moduleId" element={
            <LazyLoadWrapper theme="dark">
              <Lessons />
            </LazyLoadWrapper>
          } />

          <Route path="course/:title/modules/:moduleId/lessons/:lessonId" element={
            <LazyLoadWrapper theme="dark">
              <LessonContent />
            </LazyLoadWrapper>
          } />
        </Route>

        {/* 404 - Not Found */}
        <Route path="*" element={
          <LazyLoadWrapper theme="dark">
            <NotFound />
          </LazyLoadWrapper>
        } errorElement={<ErrorPage />} />
      </Route>
    </Route>
  )
);

export default router;