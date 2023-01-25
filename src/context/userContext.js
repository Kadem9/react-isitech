import { useState, createContext, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setloadingData] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setloadingData(false);
    });

    return unsubscribe;
  }, []);

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
      setModalState({
        registerModal: false,
        loginModal: false,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ modalState, toggleModals, signUp, currentUser }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
