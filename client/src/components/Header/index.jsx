import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar is-transparent" style={{backgroundColor: "red"}}>
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      {/* <img src="Sensei.PNG" alt="Logo img" /> */}
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
          <a className="button is-light is-rounded" href="/" >
            Sign up
          </a>
          <a className="button is-light is-rounded" href="/" >
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Header;
