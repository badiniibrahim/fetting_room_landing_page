import { useTranslation } from '../hooks/useTranslation';
import { Section } from './Section';
import './Security.css';

export function Security() {
  const t = useTranslation();

  const features = [
    {
      icon: '🔐',
      title: t('security.features.auth'),
      description: 'Connexion sécurisée avec Google, Apple ou email',
    },
    {
      icon: '🛡️',
      title: t('security.features.privacy'),
      description: 'Vos photos restent privées et ne sont jamais partagées',
    },
    {
      icon: '💾',
      title: t('security.features.history'),
      description: 'Sauvegarde sécurisée de vos données dans le cloud',
    },
  ];

  return (
    <Section title={t('security.title')} subtitle={t('security.description')} background="white">
      <div className="security-grid">
        {features.map((feature, index) => (
          <div key={index} className="security-card">
            <div className="security-icon">{feature.icon}</div>
            <h3 className="security-title">{feature.title}</h3>
            <p className="security-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

