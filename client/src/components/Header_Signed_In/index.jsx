import React from "react";
import Logo from "../Logo/index";
import Button from "../Button/index";

const Header = () => {
  return (
    <div className="" style={{ verticalAlign: "center" }}>
      <nav
        className="navbar has-height"
        style={{
          backgroundColor: "transparent",
          minHeight: "unset",
          height: "7.5em",
        }}
      >
        <div className="navbar-brand pt-5">
          <a className="link" href="/">
            <Logo src="../Sensei.PNG" position="left" />
          </a>
          <div
            className="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="./user-profile">
                  <Button
                    className="circle-btn mr-6 "
                    title="Profile"
                    padding="25px 17px 10px 17px"
                  />
                </a>
                <a href="./messages">
                <Button
                  className="circle-btn mr-6 "
                  title="Inbox"
                  padding="25px 20px 10px 20px"
                />
                </a>
                <a href="/">
                <Button
                  className="circle-btn mr-6 "
                  title="Sign Out"
                  padding="25px 20px 10px 20px"
                  backgroundColor="transparent"
                  fontColor="black"
                />
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
