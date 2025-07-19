import { AccueilHeader } from "../components/AccueilHeader";
import { Playlist } from "../components/Playlist";
import { Album } from "../components/Album";
import { Lecteur } from "../components/Lecteur";
import { SidebarAccueil } from "../components/SidebarAccueil";
import './MyMusics.css';

export function MyMusics() {
  return (
    <>
      <title>Page d&apos;accueil</title>

      <AccueilHeader />

      {/* Sidebar de l'accueil */}
      <SidebarAccueil />

      {/* Les Cover des musiques */}
      <Album />

      {/* Listes des musiques */}
      <Playlist />

      {/* Contenu du lecteur */}
      <Lecteur />
    </>
  );
}