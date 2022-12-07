import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import android from "../../Assets/images/playStore.svg";
import apple from "../../Assets/images/appleStore.svg";
import chopsticks from "../../Assets/images/food.svg";
import spag from "../../Assets/images/pasta.svg";
import mballs from "../../Assets/images/balls.svg";
import boja from "../../Assets/images/burger.svg";

import "./Home.scss";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const menus = [
    {
      id: 1,
      name: "Stir fry Pasta",
      image: spag,
      paragraph: `Stir fry pasta yada yada yada  because of Sesan`,
    },
    {
      id: 2,
      name: "Burger Meal",
      image: mballs,
      paragraph: "Stir fry pasta yada yada yada because of Sesan",
    },
    {
      id: 3,
      name: "Meat Balls",
      image: boja,
      paragraph: "Stir fry pasta yada yada yada because of Sesan",
    },
  ];

  return (
    <div className="home">
      <Navbar />
      <div className="top1">
        <div>
          <h1>
            Order <span className="colored">food</span> anytime, anywhere
          </h1>
          <p>
            {" "}
            Browse from our list of specials to place your order and have food
            delivered to you in no time. Affordable, tasty and fast!
          </p>
          <span className="downloads">
            <a href="#">
              <img className="android" src={android} alt="playstore" />
            </a>
            <a href="#">
              <img className="apple" src={apple} alt="applestore" />
            </a>
          </span>
        </div>
        <div>
          <img src={chopsticks} alt="food" className="top1-img" />
        </div>
      </div>
      <div className="top2">
        <h2>Special Meals of the day!</h2>
        <p>
          {" "}
          Check our sepecials of the day and get discounts on all our meals and
          swift delivery to what ever location within Ilorin.
        </p>
      </div>
      <div className="top3">
        {menus &&
          menus.map((menu) => (
            <div className="tiles" key={menu.id}>
              <img src={menu.image} alt="" />
              <h2>{menu.name}</h2>
              <p>{menu.paragraph}</p>
            </div>
          ))}
      </div>
      <div className="top4">
        <div className="top4-left">
          <h1>Get notified when we update!</h1>
          <p>
            Get notified when we add new items to our specials menu, <br />{" "}
            update our price list of have promos!
          </p>
        </div>
        <div className="top4-right">
          <span>
            <input type="text" placeholder="gregphillips@gmail.com" />{" "}
            <button className="alertButton">Get notified</button>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
