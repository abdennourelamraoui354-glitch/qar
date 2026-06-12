import { LazyMotion, domAnimation } from 'framer-motion';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider } from './lib/i18n/LanguageContext';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <LazyMotion features={domAnimation} strict>
        <App />
      </LazyMotion>
    </LanguageProvider>
  </StrictMode>,
);
