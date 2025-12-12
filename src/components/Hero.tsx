import { useTranslation } from '../hooks/useTranslation';
import { CTAButtons } from './CTAButtons';
import { PhoneMockup } from './PhoneMockup';
import screenshot1 from '../assets/Screenshot_20251211_214718.jpg';
import './Hero.css';

export function Hero() {
  const t = useTranslation();

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <ul className="hero-benefits">
            <li className="hero-benefit">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {t('hero.benefits.reduceReturns')}
            </li>
            <li className="hero-benefit">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {t('hero.benefits.tryOutfits')}
            </li>
            <li className="hero-benefit">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {t('hero.benefits.planLooks')}
            </li>
          </ul>
          <CTAButtons />
        </div>
        <div className="hero-visual">
          <PhoneMockup 
            image={screenshot1} 
            alt="Fitting Room app screenshot" 
          />
        </div>
      </div>
    </section>
  );
}

