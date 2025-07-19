import LogoVazo from '/images/logo-vazo.png';
import { NavLink } from 'react-router';
import './MainHeader.css';

// Header de plusieurs pages
export function MainHeader() {
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo-vazo" src={LogoVazo} alt="C'est le logo de l'application Vazo" />
          <div className="logo-title">Vazo</div>
        </NavLink>
      </div>
      <div className="right-section2">
        <NavLink>
          <img className="retour-button" src="/images/retour.png" alt="icône-retour" />
        </NavLink>

        <NavLink>
          <img className="continuer-button" src="/images/continuer.png" alt="icône-continuer" />
        </NavLink>

        <div>
          <button className="action-button supprimer-button">
            <img className="supprimer-icone" src="/images/trash.png" alt="Icône supprimer" />
            Supprimer
          </button>
        </div>

        <div>
          <button className="action-button partager-button">
            <img className="partager-icone" src="/images/add.png" alt="Icône ajouter" />
            Partager
          </button>
        </div>

        <NavLink>
          <img className="setting-icon" src="/images/parametre.png" alt="icône-parametre" />
        </NavLink>

        <img className="logo-ispm" src="/images/logo-ispm.png" alt="Logo ISPM" />
      </div>
    </div>
  );
}