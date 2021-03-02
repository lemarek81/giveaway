import React from "react";
import "./_register.scss";
import Decoration from "../../../assets/Decoration.svg";
import ButtonFunction from "../_buttons.js";
import "../_buttons.scss";
import { AuthContext } from "../../../App";

export default function Login() {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);

  return (
    <div className="registerContainer">
      <div>
        <div className="registerForm">
          <h1>Załóż konto</h1>
          <img src={Decoration}></img>
          {isLoggedIn ? null : (
            <form className="registerFormArea">
              <div className="registerInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="name"
                  placeholder=" "
                  className="mailBox"
                  id="name"
                />
                <div className="errorField" display="none">
                  Podany e-mail jest nieprawidłowy!
                </div>
                <label htmlFor="password">Hasło</label>
                <input
                  type="password"
                  name="password"
                  placeholder=" "
                  className="password"
                  id="name"
                />
                <div className="errorField" display="none">
                  Podane hasło jest nieprawidłowe!
                </div>
              </div>
            </form>
          )}
          <div className="logingButtonsWrapper">
            {isLoggedIn ? (
              <ButtonFunction
                type="submit"
                buttonSize="buttonSend"
                id="formSubmitLogin"
                onClick={() => setIsLoggedIn(false)}
              >
                Wyloguj się
              </ButtonFunction>
            ) : (
              <ButtonFunction
                type="submit"
                buttonSize="buttonSend"
                id="formSubmitLogin"
                onClick={() => setIsLoggedIn(true)}
              >
                Zaloguj się
              </ButtonFunction>
            )}
          </div>
        </div>
        <div className="registerLogout">
          {isLoggedIn ? null : <h1>Wylogowanie nastąpiło pomyślnie</h1>}
          <img src={Decoration}></img>
          <ButtonFunction
            type="submit"
            buttonSize="buttonSend"
            id="formSubmitLogout"
          >
            Strona główna
          </ButtonFunction>
        </div>
      </div>
    </div>
  );
}
