import { useTranslation } from '../hooks/useTranslation';
import { Section } from './Section';
import './YouTube.css';

export function YouTube() {
  const t = useTranslation();

  // ID de la vidéo YouTube Shorts
  const videoId = 'cBdMmTZJEOk';

  return (
    <Section background="gradient">
      <div className="youtube-content">
        <h2 className="youtube-section-title">{t('youtube.title')}</h2>
        <div className="youtube-embed">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Fitting Room Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="youtube-iframe"
          ></iframe>
        </div>
      </div>
    </Section>
  );
}

