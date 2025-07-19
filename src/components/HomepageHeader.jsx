import LogoVazo from '/images/logo-vazo.png';
import { NavLink } from 'react-router';
import './HomepageHeader.css';

// Header des deux pages d'accueil
export function HomepageHeader() {
  return (
    <div className="headerHomepage">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo-vazo" src={LogoVazo} alt="C'est le logo de l'application Vazo" />
          <div className="logo-title">Vazo</div>
        </NavLink>
      </div>
      <div className="right-section">
        <button className="connexion-button sign-in">Se connecter</button>
        <button className="connexion-button sign-up">S&#39;inscrire</button>
        {/* <img className="logo-ispm" src="/images/logo-ispm.png" alt="Logo ISPM" /> */}
      </div>
    </div>
  );
}