import { useTranslation } from '../hooks/useTranslation';
import { Section } from './Section';
import { PhoneMockup } from './PhoneMockup';
import screenshot2 from '../assets/Screenshot_20251211_214741.jpg';
import './HowItWorks.css';

export function HowItWorks() {
  const t = useTranslation();

  const steps = [
    {
      number: '01',
      title: t('howItWorks.steps.step1.title'),
      description: t('howItWorks.steps.step1.description'),
      icon: '📸',
    },
    {
      number: '02',
      title: t('howItWorks.steps.step2.title'),
      description: t('howItWorks.steps.step2.description'),
      icon: '👕',
    },
    {
      number: '03',
      title: t('howItWorks.steps.step3.title'),
      description: t('howItWorks.steps.step3.description'),
      icon: '🤖',
    },
    {
      number: '04',
      title: t('howItWorks.steps.step4.title'),
      description: t('howItWorks.steps.step4.description'),
      icon: '💾',
    },
  ];

  return (
    <Section id="how-it-works" title={t('howItWorks.title')} background="light">
      <div className="how-it-works-content">
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="how-it-works-visual">
          <PhoneMockup 
            image={screenshot2} 
            alt="Virtual try-on interface" 
          />
        </div>
      </div>
    </Section>
  );
}

