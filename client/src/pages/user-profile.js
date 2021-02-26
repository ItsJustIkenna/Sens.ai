import React, { useEffect, useState } from "react";
import Header from '../components/Header_Signed_In/index'
import UserMenu from '../components/UserMenu/index'
import UserTitle from '../components/UserTitle/index'
import CRUDMenu from '../components/CRUDMenu/index'
import Button from '../components/Button/index'
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function UserProfile() {

  const [ userdata, setUserdata ] = useState({
    username: "",
    bio: "",
    src: "https://www.placecage.com/300/300",
    projects: [""],
  }) 

  useEffect(() => {
    axios.get("/api/recruitee").then(response => {
      console.log(response.data);
      setUserdata({...userdata, username: response.data[0].username, bio: response.data[0].bio, projects: response.data[0].projects[0] })
    })
  }, []);

  return (
    <div className="userProfile" style={{backgroundColor: "red", minHeight: '100vh'}}>
      <Header />
      <UserTitle position="center" title={userdata.username} />
      <UserMenu position="center" src={userdata.src} bioDes={userdata.bio} op1 = {userdata.projects}/>
      <div className="column"></div>
      <CRUDMenu />
      <Button className="button is-black border-color-white is-rounded" style= {{fontSize : "60px", borderRadius : "250px"}} float = "left" title = "Ikigai"/>
      <div className="container is-widescreen" >
      
      
    </div>
    </div>
  );
}

export default UserProfile;
