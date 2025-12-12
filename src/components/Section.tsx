import type { ReactNode } from 'react';
import './Section.css';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: 'light' | 'white' | 'gradient';
}

export function Section({ id, title, subtitle, children, className = '', background = 'white' }: SectionProps) {
  const bgClass = `section-${background}`;
  
  return (
    <section id={id} className={`section ${bgClass} ${className}`}>
      <div className="section-container">
        {(title || subtitle) && (
          <div className="section-header">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
}

