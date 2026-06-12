import { LazyMotion, domAnimation } from 'framer-motion';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

document.documentElement.lang = 'ar';
document.documentElement.dir = 'rtl';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LazyMotion features={domAnimation} strict>
      <App />
    </LazyMotion>
  </StrictMode>,
);
