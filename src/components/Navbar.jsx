import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/warframes?search=${encodeURIComponent(q)}` : "/warframes");
    setQuery("");
  };

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

      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Rechercher une warframe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
    </header>
  );
}

export default Navbar;
