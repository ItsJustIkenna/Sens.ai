import React from "react";
import Header from '../components/Header_Signed_In/index'
import UserMenu from '../components/UserMenu/index'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function userProfile() {

  return (
    <div className="userProfile" style={{backgroundColor: "red", minHeight: '100vh'}}>
      <Header />
      <UserMenu position="right" />
      <div className="container is-widescreen" >
      
      
    </div>
    </div>
  );
}

export default userProfile;
