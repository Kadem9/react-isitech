import React, { useContext } from "react";
import "./Register.css";
import { UserContext } from "../../context/userContext";

export default function Register() {
  const { modalState, toggleModals } = useContext(UserContext);
  console.log(modalState);
  return (
    <>
      <div className="overlay">
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
                <div className="my-form">
                  <label className="label-register" htmlFor="repeatPassword">
                    Répeter le mot de passe
                  </label>
                  <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Merci de répeter votre mot de passe"
                    required
                  />
                </div>
                <button className="btn-submit-register" type="submit">
                  Valider
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
