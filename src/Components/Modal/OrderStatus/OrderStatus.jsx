import React, { useContext } from "react";
import { DashboardContext } from "../../context";
import "./OrderStatus.scss";

const OrderStatus = (props) => {
  const { cart } = props;
  const { showOrderStatus, setShowOrderStatus } = useContext(DashboardContext);
  console.log(props.cart);
  return (
    <div
      className="orderstat"
      style={{
        transform: showOrderStatus ? "translate(-0vh)" : "translate(100vh)",
        opacity: showOrderStatus ? "1" : "0",
      }}
    >
      <h3 className="title">Your Order</h3>
      <h5 className="item">Item</h5>
      <h5 className="qty">Qty</h5>
      <h5 className="price">Price</h5>
      <h5 className="stat">Status</h5>
      <div className="ordercontents">
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt={item.name} />
            <p className="order-name">{item.name}</p>
            <p className="order-amount">{item.quantity}</p>
            <p className="order-price">N1,000</p>
            <p className="order-stat">{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatus;
