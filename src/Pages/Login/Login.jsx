import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import imago from "../../Assets/images/loginPicture.svg";
import Button from "../../Components/Button/Button";

const Login = () => {
  return (
    <div classname="login">
      <div className="L-left">
        <img src={imago} alt="" className="logImage" />
      </div>
      <div className="log-right">
        <h2>Welcome Back!</h2>
        <form>
          <input
            className="mail-input"
            type="email"
            name="email"
            placeholder="Your Email address"
          />
          <div className="pass-div">
            <input
              className="sec-input"
              placeholder="Your Password"
              name="password"
              id="password"
              required
            />
            <span className="show-button">show</span>
          </div>{" "}
          <Button props={"LOGIN"} />
        </form>
        <div className="signup">
          <Link className="create" to="/register">
            Create an account
          </Link>
          <Link className="mnemosyne" to="">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
