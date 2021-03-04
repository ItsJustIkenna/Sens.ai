import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header/index";
import Logo from "../components/Logo/index";
import Title from "../components/LandingTitle/index";
import EngageModal from "../components/EngageModal/index";
import OfferModal from "../components/OfferModal/index";
import ConnectModal from "../components/ConnectModal/index";
import Button from "../components/Button/index";
import "../App.css";

function Landing() {
  const [showEngageModal, setShowEngageModal] = useState(false);
  const toggleEngageModal = () => {
    setShowEngageModal((prev) => !prev);
  };
  const [showOfferModal, setShowOfferModal] = useState(false);
  const toggleOfferModal = () => {
    setShowOfferModal((prev) => !prev);
  };
  const [showConnectModal, setShowConnectModal] = useState(false);
  const toggleConnectModal = () => {
    setShowConnectModal((prev) => !prev);
  };
  return (
    <div
      className="Landing"
      id="background"
      style={{ backgroundColor: "red", minHeight: "100vh" }}
    >
      <Header />
      <div
        className="container is-widescreen"
        style={{ display: "table", justifyContent: "center" }}
      >
        <Logo
          src="Sensei.PNG"
          width="250px"
          position="center"
          className="fade-in"
        />
        <Title
          fontSize="60px"
          className="has-text-white has-text-centered fade-in floating"
        />
        <div
          className="column is-full"
          style={{
            height: "200px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            className="circle-btn is-black is-rounded floating"
            title="1"
            paragraph="Engage"
            fontSize1="50px"
            fontSize2="30px"
            padding="50px 40px 50px 40px"
            onClick={toggleEngageModal}
          />
          <Button
            className="circle-btn is-black is-rounded floating"
            title="2"
            paragraph="Offer"
            fontSize1="50px"
            fontSize2="30px"
            onClick={toggleOfferModal}
          />
          <Button
            className="circle-btn is-black is-rounded floating"
            title="3"
            paragraph="Connect"
            fontSize1="50px"
            fontSize2="30px"
            padding="50px 40px 50px 40px"
            onClick={toggleConnectModal}
          />
        </div>
        <div
          className="column is-full"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* <Link to="./pages/ikigai">
            <Button
              className="button circle-btn is-rounded floating"
              title="What is an "
              title2=" Ikigai"
              href="./ikigai"
              margin="50px"
              fontSize1="30px"
              fontSize2="30px"
              padding="0px 50px 50px 50px"
              fontWeight="700"
            />
          </Link> */}
          <EngageModal
            showModal={showEngageModal} //Default false value that makes modal invisable
            setShowModal={toggleEngageModal} //The add button that brings up the modal
            modalTitle="Engage" //Title of the Modal (Doesn't have to be here)
            description="Users create a profile and if they are early career/new grad users, they would take an ikigai test that would be added to their profile. Startup/small business users would create profile with the type of candidates they look for."
          />
          <ConnectModal
            showModal={showConnectModal} //Default false value that makes modal invisable
            setShowModal={toggleConnectModal} //The add button that brings up the modal
            modalTitle="Connect" //Title of the Modal (Doesn't have to be here)
            description="Users are provided the opportunity to connect with potential employers/employees based upon a pre-established compatibility/passion profile."
          />
          <OfferModal
            showModal={showOfferModal} //Default false value that makes modal invisable
            setShowModal={toggleOfferModal} //The add button that brings up the modal
            modalTitle="Offer" //Title of the Modal (Doesn't have to be here)
            description="Users would be provided a feed of potential matches that fit what they profiles indicate."
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
