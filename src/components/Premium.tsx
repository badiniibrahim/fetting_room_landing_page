import { useTranslation } from '../hooks/useTranslation';
import { Section } from './Section';
import './Premium.css';

export function Premium() {
  const t = useTranslation();

  return (
    <Section id="premium" title={t('premium.title')} subtitle={t('premium.description')} background="gradient">
      <div className="premium-content">
        <div className="credits-info">
          <div className="credits-features">
            <div className="credits-feature">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('premium.features.tryOn')}</span>
            </div>
            <div className="credits-feature">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('premium.features.closet')}</span>
            </div>
            <div className="credits-feature">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('premium.features.suggestions')}</span>
            </div>
            <div className="credits-feature">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('premium.features.planner')}</span>
            </div>
          </div>
        </div>
        <div className="credits-packs">
          <div className="credit-pack">
            <div className="pack-header">
              <h3 className="pack-title">{t('premium.pack1.credits')}</h3>
              <div className="pack-price">{t('premium.pack1.price')}</div>
            </div>
            <p className="pack-description">{t('premium.pack1.description')}</p>
          </div>
          <div className="credit-pack pack-popular">
            <div className="popular-badge">{t('premium.popular')}</div>
            <div className="pack-header">
              <h3 className="pack-title">{t('premium.pack2.credits')}</h3>
              <div className="pack-price">{t('premium.pack2.price')}</div>
            </div>
            <p className="pack-description">{t('premium.pack2.description')}</p>
          </div>
          <div className="credit-pack">
            <div className="pack-header">
              <h3 className="pack-title">{t('premium.pack3.credits')}</h3>
              <div className="pack-price">{t('premium.pack3.price')}</div>
            </div>
            <p className="pack-description">{t('premium.pack3.description')}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

