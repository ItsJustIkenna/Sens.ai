import React from "react";
import logo from "../../img/higher-me-logo.png";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./style.css";

function index() {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="" />

      <IconButton>
        <p>about</p>
      </IconButton>

      <Link to="/signuppage">
        <Button variant="contained">Sign Up</Button>
      </Link>

      <Link to="/loginpage">
        <Button variant="contained">Login</Button>
      </Link>
    </div>
  );
}

export default index;
