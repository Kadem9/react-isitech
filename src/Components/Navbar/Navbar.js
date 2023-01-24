import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function Navbar() {
  const { toggleModals } = useContext(UserContext);
  return (
    <nav className="navbar-nav">
      <ul className="ul-navbar">
        <Link to="/" className="li-navbar">
          Accueil
        </Link>
        <Link className="li-navbar" onClick={() => toggleModals("login")}>
          Connexion
        </Link>
        <Link className="li-navbar" onClick={() => toggleModals("register")}>
          Inscription
        </Link>
        <Link to="/deconnexion" className="li-navbar">
          Deconnexion
        </Link>
      </ul>
    </nav>
  );
}
