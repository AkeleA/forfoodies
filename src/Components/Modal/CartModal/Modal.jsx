import React, { useState } from "react";
import "./Modal.scss";
import { v4 as uuidv4 } from "uuid";
import YourCart from "../OrderModal/Cart";

const OrderModal = (props) => {
  const {
    show,
    closeModal,
    selectedMenu,
    addToCart,
    openCheckOutModal,
    cart,
    removeFromCart,
  } = props;

  const [count, setCount] = useState(0);
  //what is the use of checkoutModal open and selectedMenuForCheckout
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  /**const [selectedMenuForCheckout, setSelectedMenuForCheckout] = useState(null);**/

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(Math.max(count - 1, 0));
  };

  const handleAddToCart = () => {
    if (count > 0) {
      const key = uuidv4();
      const item = {
        image: selectedMenu.image,
        name: selectedMenu.name,
        price: selectedMenu.price,
        quantity: count,
        key,
      };
      addToCart(item, key);
      closeModal();
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
      {selectedMenu !== null && selectedMenu !== undefined && (
        <div className="modal-content">
          <img
            src={selectedMenu.image}
            alt={selectedMenu.name}
            className="cartimg"
          />
          <h3 className="carthead">{selectedMenu.name}</h3>
          <p className="cartdesc">
            Just have a single bite of this {selectedMenu.name} and it will all
            make a proper sense to you. The kick of cherry and rich chocolate of
            this super light, airy pastry will definitely make you feel "wow".
            The perfect combination of cherry cream and rich chocolate can
            provide the ultimate fulfillment to your dessert craving.
          </p>
          <div className="cartdetails">
            <p className="itemprice">{selectedMenu.price}</p>
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
      )}
      <YourCart
        cart={cart}
        /**selectedMenuForCheckout={selectedMenuForCheckout}
        why tho?? CheckoutModalOpen={CheckoutModalOpen}**/
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default OrderModal;
