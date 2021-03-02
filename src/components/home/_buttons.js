import React from "react";
import "./_buttons.scss";

const Sizes = [
  "buttonBig",
  "buttonMedium",
  "buttonSmall",
  "buttonNav",
  "buttonSend",
];

const ButtonFunction = ({ children, buttonSize, onClick }) => {
  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[3];

  return (
    <button onClick={onClick} className={`${checkButtonSize}`}>
      {children}
    </button>
  );
};
export default ButtonFunction;
