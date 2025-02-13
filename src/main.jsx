import * as Sentry from '@sentry/react';

import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { StrictMode } from 'react';

import { AuthContextProvider } from './context/AuthContext';
import Router from './Router.jsx';

import './index.css';

const { VITE_BACKEND_API, VITE_SENTRY_DSN } = import.meta.env;

Sentry.init({
  dsn: VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: [VITE_BACKEND_API],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <Router />
      <Toaster />
    </AuthContextProvider>
  </StrictMode>
);
