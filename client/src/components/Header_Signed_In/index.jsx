import React from "react";
import Loggedin from "react";
import Logo from "../Logo/index";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar is-transparent has-height" style={{backgroundColor: "red" , minHeight : "unset" , height : "7.5em"}}>
  <div className="navbar-brand pt-5">
    <a className="link" href="/">
    <Logo src= "../Sensei.PNG" position = "left" />
    </a>
    <div className="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button mr-6 is-5 has-text-black is-light " href="../pages/signup" >Inbox</a>
          <a className="button mr-6 is-5 has-text-black is-light " href="../pages/signup" >Sign out</a>
          <a className=" is-5 has-text-black is-light " href="../pages/signup" >Sign out</a>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Header;
