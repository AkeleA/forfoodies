import React from "react";
import "./Button.sass";

const Button = ({ props }) => {
  return (
    <div>
      <button className="Button">{props}</button>
    </div>
  );
};

export default Button;
