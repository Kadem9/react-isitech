import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const { toggleModals } = useContext(UserContext);

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert("Impossible de vous deconnecter");
    }
  };
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
        <Link to="/deconnexion" onClick={logOut} className="li-navbar">
          Deconnexion
        </Link>
      </ul>
    </nav>
  );
}
