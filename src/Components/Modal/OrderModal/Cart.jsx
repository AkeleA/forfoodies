import React, { useEffect, useRef } from "react";
import "./Cart.scss";

const YourCart = (props) => {
  const { show, close, cart, removeFromCart } = props;
  const modalRef = useRef(null);

  /**useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        close();
      }
    }

    if (show) {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [show]);**/

  if (!show) {
    return null; // don't render the component if cart is not defined
  }

  let totalPrice = 0;
  if (cart) {
    cart.forEach((item) => {
      if (typeof item.price === "number" && typeof item.quantity === "number") {
        totalPrice += item.price * item.quantity;
      }
    });
  }

  return (
    <div
      className="YoCart"
      ref={modalRef}
      style={{
        transform: show ? "translate(-0vh)" : "translate(100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <h3 className="title">Your Cart</h3>

      <h4 className="item">Item</h4>
      <h4 className="quantity">Qty</h4>
      <h4 className="uprice">Unit Price</h4>
      <h4 className="total">Sub-total</h4>

      <div className="cat-contents">
        {cart.map((item) => {
          return (
            <li key={item.key}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.quantity}</p>
              <p>${item.price}</p>
            </li>
          );
        })}
        <p>Total: {totalPrice}</p>
      </div>
    </div>
  );
};

export default YourCart;
