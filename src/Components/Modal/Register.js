import React, { useContext, useRef, useState } from "react";
import "./Register.css";
import { UserContext } from "../../context/userContext";

export default function Register() {
  const { modalState, toggleModals, signUp } = useContext(UserContext);
  console.log(signUp);
  const inputs = useRef([]);
  const [validation, setValidation] = useState("");

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 Caractères minimum requis");
      return;
    } else if (
      inputs.current[1].value.length !== inputs.current[2].value.length
    ) {
      setValidation("Les mots de passe ne correspondent pas !");
      return;
    }
  };

  return (
    <>
      {modalState.registerModal && (
        <div>
          <div onClick={() => toggleModals("close")} className="overlay"></div>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Inscrivez-vous !</h2>
                <hr />
                <form onSubmit={handleForm}>
                  <div className="my-form">
                    <label className="label-register" htmlFor="email">
                      Votre adresse mail
                    </label>
                    <input
                      ref={addInputs}
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
                      ref={addInputs}
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
                      ref={addInputs}
                      type="password"
                      id="repeatPassword"
                      name="repeatPassword"
                      placeholder="Merci de répeter votre mot de passe"
                      required
                    />
                  </div>
                  <p>{validation}</p>
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
