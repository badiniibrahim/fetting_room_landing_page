import { useTranslation } from '../hooks/useTranslation';
import { Section } from './Section';
import { PhoneMockup } from './PhoneMockup';
import screenshot3 from '../assets/Screenshot_20251211_214755.jpg';
import './Closet.css';

export function Closet() {
  const t = useTranslation();

  const categories = [
    { name: 'Tops', color: '#2563EB', icon: '👔' },
    { name: 'Pantalons', color: '#3B82F6', icon: '👖' },
    { name: 'Robes', color: '#059669', icon: '👗' },
    { name: 'Chaussures', color: '#10B981', icon: '👠' },
    { name: 'Accessoires', color: '#64748B', icon: '👜' },
  ];

  return (
    <Section id="features" title={t('closet.title')} subtitle={t('closet.description')} background="white">
      <div className="closet-content">
        <div className="closet-text">
          <div className="closet-features">
            <div className="closet-feature">
              <div className="feature-icon">📁</div>
              <div>
                <h3>{t('closet.features.catalog')}</h3>
                <p>Organisez tous vos vêtements en un seul endroit</p>
              </div>
            </div>
            <div className="closet-feature">
              <div className="feature-icon">🏷️</div>
              <div>
                <h3>{t('closet.features.metadata')}</h3>
                <p>Couleur, taille, catégorie et plus encore</p>
              </div>
            </div>
            <div className="closet-feature">
              <div className="feature-icon">📂</div>
              <div>
                <h3>{t('closet.features.categories')}</h3>
                <p>Tops, bas, robes, chaussures, accessoires</p>
              </div>
            </div>
          </div>
          <div className="closet-categories">
            {categories.map((category, index) => (
              <div
                key={index}
                className="category-tag"
                style={{ '--category-color': category.color } as React.CSSProperties}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="closet-visual">
          <PhoneMockup 
            image={screenshot3} 
            alt="Closet screen" 
          />
        </div>
      </div>
    </Section>
  );
}

