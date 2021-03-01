import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./_navbar";
import Decoration from "../../../assets/Decoration.svg";
import ButtonFunction from "../_buttons.js";
import "../_buttons.scss";
import "./_navbar.scss";
import "./_header.scss";

export default function header() {
  return (
    <div className="headerSection" id="header">
      <div className="headerSectionMainSection">
        <div className="headerLeft"></div>
        <div className="headerRight">
          <div className="menuWrapper">
            <ul>
              <li>
                <div className="menuMain">
                  <Navigation></Navigation>
                </div>
              </li>
            </ul>
          </div>
          <div className="hederRightContent">
            <h1>
              Zacznij pomagać!<br></br>Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img src={Decoration}></img>
            <div className="buttonWrapper">
              <ButtonFunction buttonSize="buttonBig">
                Oddaj <br></br>rzeczy
              </ButtonFunction>
              <ButtonFunction buttonSize="buttonBig">
                Zorganizuj <br></br>zbiórkę
              </ButtonFunction>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
