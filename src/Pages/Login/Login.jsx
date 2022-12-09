import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import imago from "../../Assets/images/loginPicture.svg";
import Button from "../../Components/Button/Button";

const Login = () => {
  //defining the show password function
  //first step useState
  const [showPassword, setshowPassword] = useState(false);

  /// the toggle password i.e show and hide
  const togglePassword = (e) => {
    //to prevent default action
    e.preventDefault();

    setshowPassword(!showPassword);
  };
  /// login data
  const [logData, setlogData] = useState({ email: "", password: "" });

  //handling form data
  const handleChange = (e) => {
    setlogData({
      ...logData,
      [e.target.name]: e.target.value,
    });
  };

  //form control
  const handleSubmit = (e) => {
    e.preventDefault();
    let logUser = JSON.parse(localStorage.getItem("user"));
    console.log(logUser);
    console.log(logData);
    if (
      logData?.email === logUser?.email &&
      logData?.password === logUser?.password
    ) {
      setInterval(() => {
        window.location = "/Dashboard";
      }, 2000);
    }
  };

  return (
    <div className="login">
      <div className="L-left">
        <img src={imago} alt="" className="logImage" />
      </div>
      <div className="log-right">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="mail-input"
            type="email"
            name="email"
            placeholder="Your Email address"
            onChange={handleChange}
          />
          <div className="pass-div">
            <input
              className="sec-input"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              placeholder="Your Password"
              name="password"
              id="password"
              required
            />
            <span
              className="togbutton"
              id="showtogbutton"
              onClick={togglePassword}
            >
              show
            </span>
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
