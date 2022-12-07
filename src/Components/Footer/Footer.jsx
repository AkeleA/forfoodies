import React from "react";
import "./Footer.scss";
import android from "../../Assets/images/playStore.svg";
import apple from "../../Assets/images/appleStore.svg";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import twitter from "../../Assets/images/twitter.svg";

const Footer = () => {
  return (
    <div>
      <div className="foot1">
        <ul>
          <h3>Company</h3>
          <li>About us</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="foot2">
        <ul>
          <h3>Support</h3>
          <li>Help Center</li>
          <li>Safety Center</li>
        </ul>
      </div>
      <div className="foot3">
        <ul>
          <h3>Legal</h3>
          <li>Cookies Policy</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Dispute resolution</li>
        </ul>
      </div>
      <div className="foot4">
        <ul>
          <h3>Install App</h3>
          <li>
            <img src={android} alt="" />
          </li>
          <li>
            <img src={apple} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
