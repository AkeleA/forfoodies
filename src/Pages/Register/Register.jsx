import React, { useEffect, useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import imago from "../../Assets/images/regimage.png";
import imagocov from "../../Assets/images/regcolor.png";

const Register = () => {
  //toggle password
  const [showPassword, setshowPassword] = useState(false);

  /// the toggle password i.e show and hide
  const togglePassword = (e) => {
    //to prevent default action
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);
  //making sure the form has string
  useEffect(() => {
    if (form.name !== "" && form.email !== "") {
      setformcheck(true);
    } else {
      setformcheck(false);
    }
  }, [form.name, form.email, form.password]);
  const submitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));

    setInterval(() => {
      window.location = "/login";
    }, 2000);
  };

  return (
    <div className="register">
      <div className="r-left">
        <img src={imago} alt="" className="reg-img" />
        <img src={imagocov} alt="" className="regcov" />
      </div>
      <div className="r-right">
        <h2>Welcome to Lilies!</h2>
        <form onSubmit={submitForm}>
          <input
            className="r-name"
            type="text"
            name="name"
            placeholder="Your First Name"
            onChange={handleChange}
          />
          <input
            className="r-mail"
            name="email"
            type="email"
            placeholder="Your Email address"
            onChange={handleChange}
          />{" "}
          <div className="r-sec">
            <input
              className="r-password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Your Password"
              id="password"
              required
              onChange={handleChange}
            />
            <button
              className="show-button"
              id="regshowbuuutt"
              onClick={togglePassword}
            >
              show
            </button>
          </div>{" "}
          <br />
          <Button
            className={formcheck ? "SignUp-active" : "SignUp-submit"}
            type="submit"
            id="btn"
            disabled={!formcheck}
            props={"SIGN UP"}
          />
        </form>
        <Link to="/login" className="redirect">
          <div className="tolog">
            <p>
              Already have an account.<b> LOGIN</b>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Register;
