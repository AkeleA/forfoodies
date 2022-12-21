import React from "react";
import "./Modal.scss";
import Dashboard from "../../../Pages/Dashboard/Dashboard";

const Modal = ({ menu1, menu2 }) => {
  return (
    <div className="modal">
      <img src={menu1.image} alt="" className="cartimg" />
      <h3 className="carthead">{menu1.name}</h3>
      <p className="cartdesc">
        Just have a single bite of this {menu1.name} and it will all make a
        proper sense to you. The kick of cherry and rich chocolate of this super
        light, airy pastry will definitely make you feel "wow". The perfect
        combination of cherry cream and rich chocolate can provide the ultimate
        fulfillment to your dessert craving.
      </p>
      <div className="cartdetails">
        <span>{menu1.price}</span>
        <span>
          <p>10-20mins</p>
        </span>
        <span>
          <p>10 Pcs Available</p>
        </span>
      </div>
      <div className="cartfunction">
        <button>-</button>
        <p></p>
        <button>+</button>
      </div>
    </div>
  );
};

export default Modal;
