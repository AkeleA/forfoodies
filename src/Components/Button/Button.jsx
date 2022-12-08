import React from "react";
import "./Button.scss";

const Button = ({ props }) => {
  return (
    <div>
      <button className="button">{props}</button>
    </div>
  );
};

export default Button;
