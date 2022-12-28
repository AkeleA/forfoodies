import React, { useState } from "react";
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
import OrderModal from "../../Components/Modal/CartModal/Modal";

const Dashboard = () => {
  let userDetails = JSON.parse(localStorage.getItem("user"));
  //putting the images, titles and prices in arrays so i can map throught them
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
    setSelectedMenu(null);
  };

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
      {modalOpen ? <div onClick={closeModal} className="fade"></div> : null}
      <OrderModal show={modalOpen} close={closeModal} menu={selectedMenu} />
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
              dashmenu1.map((menu) => (
                <div className="container" key={menu.id}>
                  <img src={menu.image} className="tf-image" alt="" />
                  <h2>{menu.name}</h2>
                  <p>{menu.content}</p>
                  <div className="price">{menu.price}</div>
                  <button
                    className="addcart"
                    onClick={() => {
                      setModalOpen(true);
                      setSelectedMenu(menu);
                    }}
                  >
                    {menu.function}
                  </button>
                </div>
              ))}
          </div>
          <div className="menubottom">
            {dashmenu2 &&
              dashmenu2.map((menu) => (
                <div className="container2" key={menu.id}>
                  <img src={menu.image} className="tb-image" alt="" />
                  <h2>{menu.name}</h2>
                  <p>{menu.content}</p>
                  <div className="price2">{menu.price}</div>
                  <button
                    className="addcart2"
                    onClick={() => {
                      setModalOpen(true);
                      setSelectedMenu(menu);
                    }}
                  >
                    {menu.function}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
