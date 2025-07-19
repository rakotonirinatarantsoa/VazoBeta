import './SidebarAccueil.css';
import { NavLink } from 'react-router';

export function SidebarAccueil() {
  const menuItems = [{
    path: "/accueil",
    icon: "/images/accueil.png",
    iconName: "Accueil",
    alt: "Icône d'accueil"
  }, {
    path: "/projet",
    icon: "/images/projet.png",
    iconName: "Projet",
    alt: "Icône d'un dossier"
  }, {
    path: "/my-musics",
    icon: "/images/son-onde.png",
    iconName: "My Musics",
    alt: "Icône d'un son d'onde"
  }, {
    path: "/montage-page",
    icon: "/images/editing.png",
    iconName: "Montage",
    alt: "Icône d'un montage"
  }];

  return (
    <div className="sidebar-accueil">
      {/* <div className="menu-sidebar"> */}
        <div className="profile-container">
          <img className="profile-image" src="/images/steeven.jpg" alt="Profil de l'utilisateur" />
          <p className="profile-name">Steeven Zengu</p>
        </div>
        <div className="composant-menu">
          {menuItems.map((item, index) => {
            return (
              <NavLink to={item.path} key={index} className="composant">
                <img className="logo-composant" src={item.icon} alt={item.alt} />
                <p className="nom-composant">{item.iconName}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    // </div>
  );
}