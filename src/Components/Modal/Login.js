import React, { useContext, useRef, useState } from "react";
import "./Register.css";
import { UserContext } from "../../context/userContext";

export default function Login() {
  const { modalState, toggleModals } = useContext(UserContext);

  return (
    <>
      {modalState.loginModal && (
        <div>
          <div onClick={() => toggleModals("close")} className="overlay"></div>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Inscrivez-vous !</h2>
                <hr />
                <form>
                  <div className="my-form">
                    <label className="label-register" htmlFor="email">
                      Votre adresse mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Votre adresse mail"
                      required
                    />
                  </div>
                  <div className="my-form">
                    <label className="label-register" htmlFor="password">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Votre mot de passe"
                      required
                    />
                  </div>

                  <button className="btn-submit-register" type="submit">
                    Valider
                  </button>
                </form>
              </div>
              <button
                onClick={() => toggleModals("close")}
                className="close-modal-register"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
