import { HomepageHeader } from "../components/HomepageHeader";
import { NavLink } from 'react-router';
import ImageSlider from "./ImageSlider";
import './Homepage.css';

export function Homepage() {
  return (
    <>
      <title>Home Page</title>

      <HomepageHeader />

      <div className="homepage-body">
        <div className="homepage-container">
          <div className="introducing">
            <div className="app-info">
              <h2 className="welcome">
                Personnalisez vos vidéos lyrics avec <span className="vazo-span">Vazo</span>
              </h2>
              <p className="about-app">Une plateforme où vous pouvez convertir vos audios en vidéos lyrics captivantes et écouter vos musiques.</p>
            </div>
            <ImageSlider />
          </div>

          <NavLink to="/accueil">
            <button className="commencer-button">Commencer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}