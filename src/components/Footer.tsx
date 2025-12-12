import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Fitting Room</h3>
            <p className="footer-tagline">Votre cabine d'essayage virtuelle, dans votre poche</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Produit</h4>
              <a href="#features" className="footer-link">Fonctionnalités</a>
              <a href="#premium" className="footer-link">Premium</a>
              <a href="#gallery" className="footer-link">Galerie</a>
            </div>
           
            <div className="footer-column">
              <h4 className="footer-title">Légal</h4>
              <a href="https://sites.google.com/view/aifittingroom/privacy-policy?authuser=2" target="_blank" rel="noopener noreferrer" className="footer-link">Confidentialité</a>
              <a href="https://sites.google.com/view/aifittingroom/terms-conditions?authuser=2" target="_blank" rel="noopener noreferrer" className="footer-link">Conditions</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Fitting Room. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

