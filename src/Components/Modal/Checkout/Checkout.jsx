import React, { useContext } from "react";
import "./Checkout.scss";
import { DashboardContext } from "../../context";

const CheckoutForm = (props) => {
  const { onSubmit, onChange, closePayModal } = props;
  const { payModalOpen } = useContext(DashboardContext);
  return (
    <div
      className="checkout"
      style={{
        transform: payModalOpen ? "translate(-0vh)" : "translate(100vh)",
        opacity: payModalOpen ? "1" : "0",
      }}
    >
      <form onSubmit={onSubmit}>
        <h2 className="title">Checkout</h2>
        <input
          type="text"
          name="cardNumber"
          onChange={onChange}
          placeholder="Card Number"
          className="Cardno"
        />
        <input
          type="text"
          name="expiry"
          onChange={onChange}
          placeholder="Exp Date"
          className="Carddate"
        />
        <input
          type="text"
          name="cvv"
          onChange={onChange}
          placeholder="CVV/CVV2"
          className="CVV"
        />
        <br />
        <input
          type="text"
          name="pin"
          onChange={onChange}
          placeholder="Card Pin"
          className="CardP"
        />
        <br />
        <button type="submit" onClick={closePayModal} className="payMoney">
          Make Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
