import { useTranslation } from '../hooks/useTranslation';
import { CTAButtons } from './CTAButtons';
import './CTASection.css';

export function CTASection() {
  const t = useTranslation();

  return (
    <section className="cta-section">
      <div className="cta-section-container">
        <h2 className="cta-section-title">{t('cta.title')}</h2>
        <p className="cta-section-subtitle">{t('cta.subtitle')}</p>
        <CTAButtons />
      </div>
    </section>
  );
}

