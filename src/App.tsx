import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Closet } from './components/Closet';
import { AIStylist } from './components/AIStylist';
import { Planner } from './components/Planner';
import { Benefits } from './components/Benefits';
import { Premium } from './components/Premium';
import { Security } from './components/Security';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { YouTube } from './components/YouTube';
import { CTASection } from './components/CTASection';
import { TrustBadges } from './components/TrustBadges';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <Closet />
          <AIStylist />
          <Planner />
          <Benefits />
          <Premium />
          <Testimonials />
          <Security />
          <TrustBadges />
          <Gallery />
          <YouTube />
          <CTASection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
