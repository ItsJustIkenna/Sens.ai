import React from "react";
import Header from '../components/Header/index'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from '../components/Logo/index'
import Title from '../components/LandingTitle/index'
import Button from '../components/Button/index'

function Landing() {

  return (
    <div className="Landing" style={{backgroundColor: "red", minHeight: '100vh'}}>
      <Header />
      <div className="container is-widescreen" >
      <Logo src= "Sensei.PNG" style= {{ width: "20%"}} position = "center" />
      <Title style= {{fontSize : "60px"}} />
      <Button classParams="button is-black" style= {{fontSize : "60px", borderRadius : "250px"}} title = "1 Engage"/>
      <Button classParams="button is-black" style= {{fontSize : "60px", borderRadius : "250px"}} title = "2 Offer"/>
      <Button classParams="button is-black" style= {{fontSize : "60px", borderRadius : "250px"}} title = "3 Connect"/>
      <Link to="./pages/ikigai">
      <Button classParams="button is-black" style= {{fontSize : "60px", borderRadius : "250px"}} title = "What is an Ikigai" href="../pages/ikigai" />
      </Link>
    </div>
    </div>
  );
}

export default Landing;
