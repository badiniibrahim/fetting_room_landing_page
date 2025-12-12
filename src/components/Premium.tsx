import { useTranslation } from '../hooks/useTranslation';
import { Section } from './Section';
import './Premium.css';

export function Premium() {
  const t = useTranslation();

  return (
    <Section id="premium" title={t('premium.title')} subtitle={t('premium.description')} background="gradient">
      <div className="premium-content">
        <div className="pricing-table">
          <div className="pricing-card pricing-free">
            <div className="pricing-header">
              <h3 className="pricing-title">{t('premium.free')}</h3>
            </div>
            <div className="pricing-features">
              <div className="pricing-feature">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Essayages virtuels limités</span>
              </div>
              <div className="pricing-feature">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Gestion de placard de base</span>
              </div>
              <div className="pricing-feature">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Suggestions de base</span>
              </div>
            </div>
          </div>
          <div className="pricing-card pricing-premium">
            <div className="premium-badge">Premium</div>
            <div className="pricing-header">
              <h3 className="pricing-title">{t('premium.premium')}</h3>
            </div>
            <div className="pricing-features">
              <div className="pricing-feature">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('premium.features.credits')}</span>
              </div>
              <div className="pricing-feature">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('premium.features.moreSuggestions')}</span>
              </div>
              <div className="pricing-feature">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('premium.features.advanced')}</span>
              </div>
              <div className="pricing-feature">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('premium.features.subscriptions')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

