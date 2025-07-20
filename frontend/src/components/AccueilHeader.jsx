import LogoVazo from '/images/logo-vazo.png';
import { NavLink } from 'react-router';
import './AccueilHeader.css';

// Header de la page d'accueil
export function AccueilHeader() {
  return (
    <div className="header-accueil">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo-vazo" src={LogoVazo} alt="C'est le logo de l'application Vazo" />
          <div className="logo-title">Vazo</div>
        </NavLink>
      </div>
      <div className="right-section">
        <img className="logo-ispm" src="/images/logo-ispm.png" alt="Logo ISPM" />
      </div>
    </div>
  );
}