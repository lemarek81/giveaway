import React from "react";
import "./_register.scss";
import Navigation from "../header/_navigation";
import Decoration from "../../../assets/Decoration.svg";
import ButtonFunction from "../_buttons.js";
import "../_buttons.scss";
import { Link } from "react-router-dom";

export default function register() {
  return (
    <div className="registerContainer">
      <div className="registerForm">
        <h1>Załóż konto</h1>
        <img src={Decoration}></img>
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
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              name="passwordRepet"
              placeholder=" "
              className="password"
              id="name"
            />
            <div className="errorField" display="none">
              Hasła nie pasują
            </div>
          </div>
        </form>
        <div className="logingButtonsWrapper">
          <ButtonFunction
            type="submit"
            buttonSize="buttonSend"
            id="formSubmitRegister"
          >
            Załóż konto
          </ButtonFunction>
        </div>
      </div>
    </div>
  );
}
