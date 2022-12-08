import React, { useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import imago from "../../Assets/images/signupPicture.svg";

const Register = () => {
  //toggle password
  const [showPassword, setshowPassword] = useState(false);
  const togglePassword = (e) => {
    e.preventDefault();
    setshowPassword(!showPassword);
  };

  ///Form controlling
  const [formcheck, setformcheck] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="register">
      <div className="r-left">
        <img src={imago} alt="" className="reg-img" />
      </div>
      <div className="r-right">
        <h2>Welcome to Lilies!</h2>
        <form>
          <input
            className="r-name"
            type="text"
            name="name"
            placeholder="Your First Name"
          />
          <input
            className="r-mail"
            name="email"
            type="email"
            placeholder="Your Email address"
          />{" "}
          <div className="r-sec">
            <input
              className="r-password"
              name="password"
              placeholder="Your Password"
              id="password"
              required
            />
            <span className="show-button" onClick={togglePassword}>
              show
            </span>
          </div>{" "}
          <br />
          {/**  <Button 
          className={formvalid?"SignUp-active":"SignUp-submit"}
          type='submit'
          id='btn'
          disabled={!formvalid}
          props={"SIGN UP"} />**/}
        </form>
      </div>
    </div>
  );
};

export default Register;
