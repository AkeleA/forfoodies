import React, { useState } from "react";
import "./Modal.scss";
import avi from "../../../Assets/images/avatar.svg";
import Dashboard from "../../../Pages/Dashboard/Dashboard";
import YourCart from "../OrderModal/Cart";
import { v4 as uuidv4 } from "uuid";

const OrderModal = (props) => {
  const {
    show,
    close,
    menu,
    addToCart,
    openCheckOutModal,
    cart,
    removeFromCart,
  } = props;
  const [count, setCount] = useState(0);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedMenuForCheckout, setSelectedMenuForCheckout] = useState(null);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(Math.max(count - 1, 0));
  };

  const handleAddToCart = () => {
    if (count > 0) {
      const item = {
        image: menu.image,
        name: menu.name,
        price: menu.price,
        quantity: count,
      };
      addToCart(item);
      close();
      setCount(0);
    }
  };

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
            <button className="remove" onClick={decrease}>
              <span>-</span>
            </button>
            <span>{count}</span>
            <button className="improve" onClick={increase}>
              <span>+</span>
            </button>
          </div>
          <button className="tocart" onClick={handleAddToCart}>
            <span>Add to Cart</span>
          </button>
        </div>
      ) : (
        <div className="modal-content">
          <h4>No menu item selected</h4>
        </div>
      )}
      {menu !== null && menu !== undefined && (
        <YourCart
          cart={cart}
          selectedMenuForCheckout={selectedMenuForCheckout}
          setCheckoutModalOpen={setCheckoutModalOpen}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default OrderModal;
