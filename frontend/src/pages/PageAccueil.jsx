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
              <video controls className="video1" src="/video/hira1.mp4" alt="Video 1" />
              <video controls className="video2" src="/video/hira2.mp4" alt="Video 2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}