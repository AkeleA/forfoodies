import React from "react";
import "./Dashboard.scss";
import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsCalendarFill, BsFillBookmarkFill } from "react-icons/bs";
import avi from "../../Assets/images/avatar.svg";
import pasta from "../../Assets/images/dashimg1.png";
import burger from "../../Assets/images/dashimg2.png";
import balls from "../../Assets/images/dashimg3.png";
import spagg from "../../Assets/images/dashimg4.png";
import bread from "../../Assets/images/dashimg5.png";
import china from "../../Assets/images/dashimg5.png";

import sideLogo from "../../Assets/images/dashlogo.png";

const Dashboard = () => {
  let userDetails = JSON.parse(localStorage.getItem("user"));
  //putting the images, titles and prices in arrays so i can map throught them
  const dashmenu1 = [
    {
      id: 1,
      name: "Stir Fry Pasta",
      image: pasta,
      content: "The in-house pasta and chicken by chef Moose",
      price: "N 1,000.00",
      function: "Add to cart",
    },
    {
      id: 2,
      name: "Stir Fry Pasta",
      image: burger,
      content: "The in-house pasta and chicken by chef Moose",
      price: "N 1,000.00",
      function: "Add to cart",
    },
    {
      id: 3,
      name: "Stir Fry Pasta",
      image: balls,
      content: "The in-house pasta and chicken by chef Moose",
      price: "N 1,000.00",
      function: "Add to cart",
    },
  ];
  const dashmenu2 = [
    {
      id: 1,
      name: "Stir Fry Pasta",
      image: spagg,
      content: "The in-house pasta and chicken by chef Moose",
      price: "N 1,000.00",
      function: "Add to cart",
    },
    {
      id: 2,
      name: "Stir Fry Pasta",
      image: bread,
      content: "The in-house pasta and chicken by chef Moose",
      price: "N 1,000.00",
      function: "Add to cart",
    },
    {
      id: 3,
      name: "Stir Fry Pasta",
      image: china,
      content: "The in-house pasta and chicken by chef Moose",
      price: "N 1,000.00",
      function: "Add to cart",
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
      <div className="mainboard">
        <div className="main-top">
          <div className="mt-left">
            <h2>Good morning, {userDetails.name}!</h2>
            <p>What delicious meal are you craving today?</p>
          </div>
          <div className="mt-right">
            <img src={avi} alt="avatar" />
          </div>
          <div className="menutop">
            {dashmenu1 &&
              dashmenu1.map((menu1) => (
                <div className="container" key={menu1.id}>
                  <img src={menu1.image} className="tf-image" alt="" />
                  <h2>{menu1.name}</h2>
                  <p>{menu1.content}</p>
                  <div className="price">{menu1.price}</div>
                  <button className="addcart">{menu1.function}</button>
                </div>
              ))}
          </div>
          <div className="menubottom">
            {dashmenu2 &&
              dashmenu2.map((menu2) => (
                <div className="container2" key={menu2.id}>
                  <img src={menu2.image} className="tb-image" alt="" />
                  <h2>{menu2.name}</h2>
                  <p>{menu2.content}</p>
                  <div className="price2">{menu2.price}</div>
                  <button className="addcart2">{menu2.function}</button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
