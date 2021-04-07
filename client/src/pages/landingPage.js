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
      <NavBar />
      <Slogan />
      <DropdownButton />
      <GetStartedButton />
      <Vision />
      <Method />
      <Button />
      <Founder />
    </div>
  );
}

export default landingPage;
