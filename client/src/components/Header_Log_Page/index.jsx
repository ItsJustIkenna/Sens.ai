import React from "react";
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
</nav>
    </div>
  );
};

export default Header;
