import React, { useState } from "react";
import Decoration from "../../../assets/Decoration.svg";
import "./_contactForm.scss";
import ButtonFunction from "../_buttons.js";

export default function _contactForm() {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    message: null,
  });

  const [errors, setErrors] = useState([]);
  const [messageSent, setMessageSent] = useState(false);

  const formSubmit = (e) => {
    setMessageSent(false);
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("THEN ", data);

        if (data.status === "error") {
          setErrors(data.errors);
        } else {
          setMessageSent(true);
        }
      });

    e.preventDefault();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contactForm">
      <h1>Skontaktuj się z nami</h1>
      {messageSent ? <h2>Dziękujemy za wiadomość!</h2> : null}
      <img src={Decoration}></img>
      <form className="contactFormArea" onSubmit={formSubmit}>
        <div className="contactFirstRow">
          <div className="contactFromInputSetup">
            <label htmlFor="name">Wpisz swoje imię</label>
            <input
              type="text"
              name="name"
              placeholder="Krzysztof"
              className="nameBox"
              onChange={handleChange}
              id="name"
            />
          </div>
          <div className="contactFromInputSetup">
            <label htmlFor="email">Wpisz swój email</label>
            <input
              name="email"
              placeholder="abc@xyz.pl"
              className="mailBox"
              onChange={handleChange}
              id="email"
            />
          </div>
        </div>
        <div className="contactSecondRow">
          <div className="contactFromInputSetup">
            <label htmlFor="message"> Wpisz swoją wiadomość</label>
            <input
              type="text"
              onChange={handleChange}
              name="message"
              placeholder="lorem inpus dolor sit amet, consctetur adipsicin elit
                    sed do elismod temport incidibund ut labore et doloer magna aliqua. 
                    Ut enim ad minim veniam , quis nostrud exercitation ullamco laoris nisi ut aliquip ex ea commodo cpnsequat."
              className="messageBox"
              id="name"
            />
          </div>
        </div>
        <div>
          {errors.map((error) => (
            <p>{`${error.msg} - param name ${error.param}`}</p>
          ))}
        </div>
        <ButtonFunction type="submit" buttonSize="buttonSend" id="formSubmit">
          Wyślij
        </ButtonFunction>
      </form>
    </div>
  );
}
