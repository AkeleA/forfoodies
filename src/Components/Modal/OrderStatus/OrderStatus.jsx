import React, { useContext } from "react";
import { DashboardContext } from "../../context";
import "./OrderStatus.scss";

const OrderStatus = (props) => {
  const { cart } = props;
  const { showOrderStatus, setShowOrderStatus } = useContext(DashboardContext);
  return (
    <div
      className="orderstat"
      style={{
        transform: showOrderStatus ? "translate(-0vh)" : "translate(100vh)",
        opacity: showOrderStatus ? "1" : "0",
      }}
    >
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Item Total: {item.itemTotal}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderStatus;
