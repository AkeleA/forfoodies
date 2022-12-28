import React from "react";
import "./Modal.scss";
import avi from "../../../Assets/images/avatar.svg";
import Dashboard from "../../../Pages/Dashboard/Dashboard";

const OrderModal = (props) => {
  const { show, close, menu } = props;

  return (
    <div
      className="modal"
      style={{
        transform: show ? "translate(-0vh)" : "translate(100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      {menu !== null && menu !== undefined ? (
        <div className="modal-content">
          <img src={menu.image} alt={menu.name} className="cartimg" />
          <h3 className="carthead">{menu.name}</h3>
          <p className="cartdesc">
            Just have a single bite of this {menu.name} and it will all make a
            proper sense to you. The kick of cherry and rich chocolate of this
            super light, airy pastry will definitely make you feel "wow". The
            perfect combination of cherry cream and rich chocolate can provide
            the ultimate fulfillment to your dessert craving.
          </p>
          <div className="cartdetails">
            <p className="itemprice">{menu.price}</p>
            <p className="deliverytime">10-20mins</p>
            <p className="itemno">10 Pcs Avail</p>
          </div>
          <div className="foodno">
            <button className="remove">
              <span>-</span>
            </button>
            <span>3</span>
            <button className="improve">
              <span>+</span>
            </button>
          </div>
          <button className="tocart">
            <span>Add to Cart</span>
          </button>
        </div>
      ) : (
        <div className="modal-content">
          <h4>No menu item selected</h4>
        </div>
      )}
    </div>
  );
};

export default OrderModal;
