import React, { useEffect, useState } from "react";
import Header from "../components/Header_Signed_In/index";
import UserMenu from "../components/UserMenu/index";
import UserTitle from "../components/UserTitle/index";
import CRUDMenu from "../components/CRUDMenu/index";
import Button from "../components/Button/index";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function UserProfile() {
  const [projectTitle, setProjectTitle] = useState("");
  const [userdata, setUserdata] = useState({
    username: "Loading Username...",
    bio: "Loading Bio...",
    src: "https://www.placecage.com/300/300",
    projects: ["Loading Projects..."],
  });

  useEffect(() => {
    axios.get("/api/recruitee").then((response) => {
      console.log(response.data);
      setUserdata({
        ...userdata,
        username: response.data[0].username,
        bio: response.data[0].bio,
        projects: response.data[0].projects[0].name,
        id: response.data[0].projects[0].id
      });
    });
  }, []);

  const handleSubmit = () => {
    console.log(projectTitle);
  };

  return (
    <div
      className="userProfile"
      id="background"
      style={{ backgroundColor: "red", minHeight: "100vh" }}
    >
      <Header />
      {/* <UserTitle position="center" title={userdata.username} /> */}
      <UserMenu
        position="center"
        src={userdata.src}
        bioDes={userdata.bio}
        op1={userdata.projects}
        id={userdata.id}
        handleSubmit={handleSubmit}
        projectTitle={projectTitle}
        setProjectTitle={setProjectTitle}
        title={userdata.username}
      />
      <div className="column"></div>
      {/* <CRUDMenu /> */}
      
      <div className="container is-widescreen"></div>
    </div>
  );
}

export default UserProfile;
