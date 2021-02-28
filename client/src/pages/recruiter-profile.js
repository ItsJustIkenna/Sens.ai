import React from "react";
import Header from '../components/Header_Signed_In/index'
import UserMenu from '../components/UserMenu/index'
import UserTitle from '../components/UserTitle/index'
import CRUDMenu from '../components/CRUDMenu/index'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function userProfile() {

  return (
    <div
      className="recruiterProfile"
      id="background"
      style={{ backgroundColor: "red", minHeight: "100vh" }}
    >
      <Header />
      <UserTitle position="center" title="Jerome Parkins"/>
      <UserMenu position="center" src="../Prof_guy.jpg"/>
      <div className="column"></div>
      <CRUDMenu />
      <div className="container is-widescreen" >
      
      
    </div>
    </div>
  );
}

export default userProfile;
