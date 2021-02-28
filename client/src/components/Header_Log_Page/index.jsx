import React from "react";
import Logo from "../Logo/index";

const Header = () => {
  return (
    <div className="">
      <nav className="navbar has-height" style={{backgroundColor: "transparent" , minHeight : "unset" , height : "7.5em"}}>
  <div className="navbar-brand pt-5">
    <a className="link" href="/">
    <Logo src= "../Sensei.PNG" position = "left" />
    </a>
  </div>
</nav>
    </div>
  );
};

export default Header;
