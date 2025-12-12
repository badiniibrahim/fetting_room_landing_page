import { useTranslation } from '../hooks/useTranslation';
import { Section } from './Section';
import './Testimonials.css';

export function Testimonials() {
  const t = useTranslation();

  const testimonials = [
    {
      name: t('testimonials.testimonial1.name'),
      role: t('testimonials.testimonial1.role'),
      content: t('testimonials.testimonial1.content'),
      rating: 5,
    },
    {
      name: t('testimonials.testimonial2.name'),
      role: t('testimonials.testimonial2.role'),
      content: t('testimonials.testimonial2.content'),
      rating: 5,
    },
    {
      name: t('testimonials.testimonial3.name'),
      role: t('testimonials.testimonial3.role'),
      content: t('testimonials.testimonial3.content'),
      rating: 5,
    },
  ];

  return (
    <Section title={t('testimonials.title')} background="light">
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">⭐</span>
              ))}
            </div>
            <p className="testimonial-content">"{testimonial.content}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {testimonial.name.charAt(0)}
              </div>
              <div className="testimonial-info">
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="testimonial-role">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

