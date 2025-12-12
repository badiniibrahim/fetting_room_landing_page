import { useTranslation } from '../hooks/useTranslation';
import { Section } from './Section';
import { PhoneMockup } from './PhoneMockup';
import screenshot1 from '../assets/Screenshot_20251211_214718.jpg';
import screenshot2 from '../assets/Screenshot_20251211_214741.jpg';
import screenshot3 from '../assets/Screenshot_20251211_214755.jpg';
import screenshot4 from '../assets/Screenshot_20251211_214809.jpg';
import './Gallery.css';

export function Gallery() {
  const t = useTranslation();

  const screenshots = [
    { image: screenshot1, alt: 'Virtual try-on screen' },
    { image: screenshot2, alt: 'Closet screen' },
    { image: screenshot3, alt: 'Outfit planner' },
    { image: screenshot4, alt: 'AI suggestions' },
  ];

  return (
    <Section id="gallery" title={t('gallery.title')} background="light">
      <div className="gallery-grid">
        {screenshots.map((screenshot, index) => (
          <div key={index} className="gallery-item">
            <PhoneMockup image={screenshot.image} alt={screenshot.alt} />
          </div>
        ))}
      </div>
    </Section>
  );
}

