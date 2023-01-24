import { useState, createContext, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setloadingData] = useState(true);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Gestion de mes modales de connexion et d'inscription
  const [modalState, setModalState] = useState({
    registerModal: false,
    loginModal: false,
  });

  const toggleModals = (modal) => {
    if (modal === "register") {
      setModalState({
        registerModal: true,
        loginModal: false,
      });
    }
    if (modal === "login") {
      setModalState({
        registerModal: false,
        loginModal: true,
      });
    }
    if (modal === "close") {
      console.log("test");
      setModalState({
        registerModal: false,
        loginModal: false,
      });
    }
  };

  return (
    <UserContext.Provider value={{ modalState, toggleModals, signUp }}>
      {props.children}
    </UserContext.Provider>
  );
}
