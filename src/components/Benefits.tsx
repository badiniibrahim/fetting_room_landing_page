import { useTranslation } from '../hooks/useTranslation';
import { Section } from './Section';
import './Benefits.css';

export function Benefits() {
  const t = useTranslation();

  const benefits = [
    {
      icon: '🛒',
      title: t('benefits.items.stressFree.title'),
      description: t('benefits.items.stressFree.description'),
    },
    {
      icon: '📦',
      title: t('benefits.items.organized.title'),
      description: t('benefits.items.organized.description'),
    },
    {
      icon: '💡',
      title: t('benefits.items.inspiration.title'),
      description: t('benefits.items.inspiration.description'),
    },
    {
      icon: '⏱️',
      title: t('benefits.items.timeSaving.title'),
      description: t('benefits.items.timeSaving.description'),
    },
    {
      icon: '💰',
      title: t('benefits.items.avoidReturns.title'),
      description: t('benefits.items.avoidReturns.description'),
    },
    {
      icon: '🤖',
      title: t('benefits.items.aiStylist.title'),
      description: t('benefits.items.aiStylist.description'),
    },
    {
      icon: '👗',
      title: t('benefits.items.virtualTry.title'),
      description: t('benefits.items.virtualTry.description'),
    },
  ];

  return (
    <Section title={t('benefits.title')} background="light">
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

