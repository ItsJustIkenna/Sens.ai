import React from "react";

const UserProjects = ({ Description }) => {

  var projects = [
    "Project 1",
    "Project 2",
    "Project 3"
  ];

  return (
    <div className="block " style={{ height : "auto" , width : "40%" , float : "left"}}>
        <h1 className="title is-4 has-text-white" style={{ textAlign : "left"}} >Projects</h1>
        <p className="description  is-6 has-text-white" style={{ textAlign : "left" , paddingTop : ""}} >{Description}</p>
        <p className="description  is-6 has-text-white" style={{ textAlign : "left" , paddingTop : ""}} >{Description}</p>
        <p className="description  is-6 has-text-white" style={{ textAlign : "left" , paddingTop : ""}} >{Description}</p>
    </div>
  );
};

export default UserProjects;
