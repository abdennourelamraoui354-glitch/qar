import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('nm-lang') || 'en');

  useEffect(() => {
    localStorage.setItem('nm-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang];
  const toggle = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, dir: lang === 'ar' ? 'rtl' : 'ltr', isAr: lang === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
