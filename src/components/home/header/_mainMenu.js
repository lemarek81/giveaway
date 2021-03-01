import React from "react";
import { Link } from "react-router-dom";
import ButtonFunction from "../_buttons.js";
import { AuthContext } from "../../../App";

export default function MainMenu() {
  const { isLoggedIn } = React.useContext(AuthContext);

  return (
    <div className="menuWrapper">
      <ul>
        <li>
          <div className="menuTop">
            {isLoggedIn ? (
              <span className="User">Zarejestrowany: Jan Kowalski</span>
            ) : null}
            <Link to="/login">
              <ButtonFunction type="submit" buttonSize="buttonSmall">
                Zaloguj
              </ButtonFunction>
            </Link>
            <Link to="/register">
              <ButtonFunction type="submit" buttonSize="buttonSmall">
                Załóż konto
              </ButtonFunction>
            </Link>
            <Link to="/">
              <ButtonFunction type="submit" buttonSize="buttonSmall">
                Strona główna
              </ButtonFunction>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
