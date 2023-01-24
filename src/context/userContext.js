import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
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
    <UserContext.Provider value={{ modalState, toggleModals }}>
      {props.children}
    </UserContext.Provider>
  );
}
