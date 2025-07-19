import { AccueilHeader } from "../components/AccueilHeader";
import { SidebarAccueil } from "../components/SidebarAccueil";
import { NavLink } from "react-router";
import './PageAccueil.css';

export function PageAccueil() {
  return (
    <>
      <title>Page d&apos;accueil</title>

      <AccueilHeader />

      {/* Sidebar de l'accueil */}
      <SidebarAccueil />

      {/* Contenu de l'accueil */}
      <div className="accueil-container">
        <NavLink to="/televerser-page" className="importer-fichier">
          <button className="importer-fichier-button">Importer un fichier</button>
        </NavLink>

        <div className="view-accueil">
          <div className="welcoming">
            <h1>Bonjour</h1>
            <h4>Vous pouvez personnaliser vos vidéos</h4>
          </div>

          <div className="videos-accueil">
            <div className="example">
              <img className="video1" src="/images/video1.png" alt="Video 1" />
              <img className="video2" src="/images/video-telephone.png" alt="Video 2" />
              <img className="video3" src="/images/video2.png" alt="Video 3" />
            </div>

            <div className="example">
              <img className="video1" src="/images/video1.png" alt="Video 1" />
              <img className="video2" src="/images/video-telephone.png" alt="Video 2" />
              <img className="video3" src="/images/video2.png" alt="Video 3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}