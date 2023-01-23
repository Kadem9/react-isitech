import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProviders(props) {
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
    }

    return (
      <UserContext.Provider value={{ modalState, toggleModals }}>
        {props.children}
      </UserContext.Provider>
    );
  };
}
