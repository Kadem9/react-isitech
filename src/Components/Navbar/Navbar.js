import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar-nav">
      <ul className="ul-navbar">
        <Link to="/" className="li-navbar">
          Accueil
        </Link>
        <Link to="/connexion" className="li-navbar">
          Connexion
        </Link>
        <Link to="/inscription" className="li-navbar">
          Inscription
        </Link>
        <Link to="/deconnexion" className="li-navbar">
          Deconnexion
        </Link>
      </ul>
    </nav>
  );
}
