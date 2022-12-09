import React from "react";
import "./Dashboard.scss";
import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsCalendarFill, BsFillBookmarkFill } from "react-icons/bs";
import pasta from "../../Assets/images/pasta.svg";
import burger from "../../Assets/images/burger.svg";
import balls from "../../Assets/images/balls.svg";
import spagg from "../../Assets/images/spagg.svg";
import bread from "../../Assets/images/bread.svg";
import china from "../../Assets/images/china.svg";

import sideLogo from "../../Assets/images/dashlogo.png";

const Dashboard = () => {
  //putting the images, titles and prices in arrays so i can map throught them
  const dashmenu1 = [
    {
      id: 1,
      foodname: "Stir Fry Pasta",
      image: pasta,
      content: "The in-house pasta and chicken by chef Moose",
      price: "N 1,000.00",
    },
    {
      id: 2,
      foodname: "Stir Fry Pasta",
      image: burger,
      content: "The in-house pasta and chicken by chef Moose",
      price: "N 1,000.00",
    },
    {
      id: 3,
      foodname: "Stir Fry Pasta",
      image: balls,
      content: "The in-house pasta and chicken by chef Moose",
      price: "N 1,000.00",
    },
  ];
  const dashmenu2 = [
    {
      id: 1,
      foodname: "Stir Fry Pasta",
      image: spagg,
      content: "The in-house pasta and chicken by chef Moose",
      price: "N 1,000.00",
    },
    {
      id: 2,
      foodname: "Stir Fry Pasta",
      image: bread,
      content: "The in-house pasta and chicken by chef Moose",
      price: "N 1,000.00",
    },
    {
      id: 3,
      foodname: "Stir Fry Pasta",
      image: china,
      content: "The in-house pasta and chicken by chef Moose",
      price: "N 1,000.00",
    },
  ];

  return (
    <div className="Dashboard">
      <div className="sidebar">
        <div className="s-logo">
          <img src={sideLogo} alt="logo" />
        </div>
        <div className="s-nav">
          <div className="s-list1">
            <span>
              <MdHome className="icon1" />
              <p className="list-dash">Dashboard</p>
            </span>
          </div>
          <div className="s-list2">
            <span>
              <CgProfile className="icon2" />
              <p className="list-prof">Your Profile</p>
            </span>
          </div>
          <div className="s-list3">
            <span>
              <BsCalendarFill className="icon3" />
              <p className="list-orders">Orders</p>
              <button className="order-button">6</button>
            </span>
          </div>
          <div className="s-list4">
            <span>
              <BsFillBookmarkFill className="icon4" />
              <p className="list-cart">Your Cart</p>
              <button className="cart-button">6</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
