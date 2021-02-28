import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header/index";
import Logo from "../components/Logo/index";
import Title from "../components/LandingTitle/index";
import Button from "../components/Button/index";
import '../App.css'

function Landing() {
  return (
    <div
      className="Landing"
      id="background"
      style={{ backgroundColor: "red", minHeight: "100vh" }}
    >
      <Header />
      <div className="container is-widescreen" style={{display: "table" , justifyContent: "center"}}>
        <Logo src="Sensei.PNG" width="250px" position="center" />
        <Title fontSize="60px" />
        <div className="column is-full" style={{height : "200px" , display : "flex" , justifyContent: "space-between"}}>
        <Button
          className="circle-btn is-black is-rounded"
          title="1"
          paragraph="Engage"
          fontSize1="50px"
          fontSize2="30px"
          padding="50px 40px 50px 40px"
        />
        <Button
          className="circle-btn is-black is-rounded"
          title="2"
          paragraph="Offer"
          fontSize1="50px"
          fontSize2="30px"
        />
        <Button
          className="circle-btn is-black is-rounded"
          title="3"
          paragraph="Connect"
          fontSize1="50px"
          fontSize2="30px"
          padding="50px 40px 50px 40px"
        />
        </div>
        <div className="column is-full" style={{ display: "flex" , justifyContent: "center"}}>
        <Link to="./pages/ikigai">
          <Button
            className="button circle-btn is-rounded"
            title="What is an "
            title2=" Ikigai"
            href="./ikigai"
            margin="50px"
            fontSize1="30px"
            fontSize2="30px"
            padding="0px 50px 10px 50px"
            fontWeight="700"
          />
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Landing;
