import React from "react";

const UserProjects = ({ Description , fontSize, none, option1, option2, option3, option4, option5 }) => {

  return (
    <div className="block " style={{ height : "auto" , width : "40%" , float : "left"}}>
        <h1 className="title is-4 has-text-white" style={{ textAlign : "left"}} >Projects</h1>
        <select style={{width : "100%" , height : "40px" , backgroundColor : "transparent" , borderBlockColor : "white" , marginBottom : "15px" }} >
      <option selected value={none}></option>
      <option value={option1} style={{color : "white"}} >{option1}</option>
      <option value={option2}>{option2}</option>
      <option value={option3}>{option3}</option>
      <option value={option4}>{option4}</option>
      <option value={option5}>{option5}</option>
    </select>
    </div>
  );
};

export default UserProjects;
