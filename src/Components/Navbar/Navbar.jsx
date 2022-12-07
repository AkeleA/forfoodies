import React from "react";
import logo from "../../Assets/images/logo.svg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav>
        <span className="n-left">
          <img src={logo} alt="" className="n-logo" />
          <h1>Lilies</h1>
        </span>
        <div className="n-right">
          <ul>
            <li>Home</li>
            <li>Login</li>
            <button />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
