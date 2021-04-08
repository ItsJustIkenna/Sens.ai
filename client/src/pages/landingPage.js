import React from "react";
import NavBar from "../components/navbarComponent";
import Slogan from "../components/sloganComponent";
import DropdownButton from "../components/dropdownButtonComponent";
import GetStartedButton from "../components/getStartedButtonComponent";
import Vision from "../components/visionComponent";
import Method from "../components/methodComponent";
import Button from "../components/buttonComponent";
import Founder from "../components/founderComponent";

function landingPage() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <Slogan />
        </div>
        <div className="row">
          <div className="col-6">
            <DropdownButton />
          </div>
          <div className="col-6">
            <GetStartedButton />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Vision />
          </div>
          <div className="col-6">
            <Method />
          </div>
        </div>
        <div className="row">
          <Button />
        </div>
        <div className="row">
          <Founder />
        </div>
      </div>
    </div>
  );
}

export default landingPage;
