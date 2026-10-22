import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="topbar">
      <Link to="/" className="logo">
        <img src="/all_img/img_warframe/logo.webp" alt="Build Frame" />
      </Link>

      <nav className="menu">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/builds">Builds</NavLink>
        <NavLink to="/warframes">Warframes</NavLink>
        <NavLink to="/armes">Armes</NavLink>
        <NavLink to="/skins">Skins</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
      </nav>

      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Rechercher une warframe..." />
        <button type="submit">Rechercher</button>
      </form>
    </header>
  );
}

export default Navbar;
