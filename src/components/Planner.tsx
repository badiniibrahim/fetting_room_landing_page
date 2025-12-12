import { useTranslation } from '../hooks/useTranslation';
import { Section } from './Section';
import { PhoneMockup } from './PhoneMockup';
import screenshot3 from '../assets/Screenshot_20251211_214755.jpg';
import './Planner.css';

export function Planner() {
  const t = useTranslation();

  return (
    <Section title={t('planner.title')} subtitle={t('planner.description')} background="white">
      <div className="planner-content">
        <div className="planner-visual">
          <PhoneMockup 
            image={screenshot3} 
            alt="Outfit planner calendar" 
          />
        </div>
        <div className="planner-info">
          <div className="planner-feature">
            <div className="planner-icon">📅</div>
            <h3>Calendrier hebdomadaire</h3>
            <p>Organisez vos tenues jour par jour pour la semaine</p>
          </div>
          <div className="planner-feature">
            <div className="planner-icon">🎯</div>
            <h3>Événements spécifiques</h3>
            <p>Préparez vos looks pour des occasions spéciales</p>
          </div>
          <div className="planner-feature">
            <div className="planner-icon">⚡</div>
            <h3>Gain de temps</h3>
            <p>Plus de stress le matin, tout est déjà planifié</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

