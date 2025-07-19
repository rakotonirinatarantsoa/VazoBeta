import LogoVazo from '/images/logo-vazo.png';
import { NavLink } from 'react-router';
import './HeaderTeleverser.css';

export function HeaderTeleverser() {
  return (
    // Header de la page televerser page
    <div className="header-televerser">
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