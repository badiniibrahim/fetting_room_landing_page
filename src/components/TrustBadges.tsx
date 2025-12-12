import { useTranslation } from '../hooks/useTranslation';
import './TrustBadges.css';

export function TrustBadges() {
  const t = useTranslation();

  return (
    <div className="trust-badges">
      <div className="trust-badge">
        <div className="badge-icon">🔒</div>
        <div className="badge-text">{t('trust.secure')}</div>
      </div>
      <div className="trust-badge">
        <div className="badge-icon">⭐</div>
        <div className="badge-text">{t('trust.rated')}</div>
      </div>
      <div className="trust-badge">
        <div className="badge-icon">👥</div>
        <div className="badge-text">{t('trust.users')}</div>
      </div>
      <div className="trust-badge">
        <div className="badge-icon">✅</div>
        <div className="badge-text">{t('trust.gdpr')}</div>
      </div>
    </div>
  );
}

