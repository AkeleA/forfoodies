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
      let price = parseFloat(item.price.replace(/[^\d\.]/g, ""));
      if (typeof price === "number" && typeof item.quantity === "number") {
        totalPrice += price * item.quantity;
      }
    });
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

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
        {cart.map((item, index) => {
          return (
            <li key={item.key} className="cart-item">
              <img src={item.image} alt={item.name} className="cartImg" />
              <p className="cartName">{item.name}</p>
              <p className="removebutton" onClick={() => removeFromCart(index)}>
                Remove
              </p>
              <p className="cartQty">{item.quantity}</p>
              <p className="cartuPrice">{item.price}</p>
            </li>
          );
        })}
        <p className="carttPrice">{formatter.format(totalPrice)}</p>
      </div>
    </div>
  );
};

export default YourCart;
