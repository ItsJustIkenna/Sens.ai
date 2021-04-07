import React from "react";
import logo from "../../img/higher-me-logo.png";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import "./style.css";

function index() {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="" />

      <IconButton>
        <p>about</p>
      </IconButton>

      <Button variant="contained">Sign Up</Button>

      <Button variant="contained">Login</Button>
    </div>
  );
}

export default index;
