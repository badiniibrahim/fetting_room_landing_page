import { useTranslation } from '../hooks/useTranslation';
import { Section } from './Section';
import { PhoneMockup } from './PhoneMockup';
import screenshot4 from '../assets/Screenshot_20251211_214809.jpg';
import './AIStylist.css';

export function AIStylist() {
  const t = useTranslation();

  const features = [
    {
      title: t('aiStylist.features.suggestions'),
      description: 'Tenues complètes adaptées à chaque occasion',
      icon: '✨',
    },
    {
      title: t('aiStylist.features.analysis'),
      description: 'Analyse approfondie de votre style personnel',
      icon: '🔍',
    },
    {
      title: t('aiStylist.features.advice'),
      description: 'Conseils personnalisés disponibles 24/7',
      icon: '💡',
    },
  ];

  return (
    <Section title={t('aiStylist.title')} subtitle={t('aiStylist.description')} background="gradient">
      <div className="ai-stylist-content">
        <div className="ai-stylist-visual">
          <PhoneMockup 
            image={screenshot4} 
            alt="AI outfit suggestions" 
          />
        </div>
        <div className="ai-stylist-features">
          {features.map((feature, index) => (
            <div key={index} className="ai-feature-card">
              <div className="ai-feature-icon">{feature.icon}</div>
              <h3 className="ai-feature-title">{feature.title}</h3>
              <p className="ai-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

