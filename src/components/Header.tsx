import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import './Header.css';

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Fitting Room</span>
        </div>
        <nav className="nav">
          <a href="#features" className="nav-link">
            {t('header.nav.features')}
          </a>
          <a href="#how-it-works" className="nav-link">
            {t('header.nav.howItWorks')}
          </a>
          <a href="#premium" className="nav-link">
            {t('header.nav.premium')}
          </a>
          <a href="#gallery" className="nav-link">
            {t('header.nav.gallery')}
          </a>
        </nav>
        <button className="language-toggle" onClick={toggleLanguage} aria-label="Toggle language">
          <span className={language === 'fr' ? 'active' : ''}>FR</span>
          <span className="separator">/</span>
          <span className={language === 'en' ? 'active' : ''}>EN</span>
        </button>
      </div>
    </header>
  );
}

