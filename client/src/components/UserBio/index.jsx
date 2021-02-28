import React from "react";

const UserBio = ({ Description }) => {
  return (
    <div className="block" style={{ height : "auto" , width : "77%" , float : "right", paddingRight : "40px"}}>
        <h1 className="title is-4 has-text-white" style={{ textAlign : "left" , paddingTop : "18px"}} >Bio</h1>
        <p className="description subtitle is-6 has-text-white" style={{ textAlign : "left" , paddingTop : "6px"}} >{Description}</p>
    </div>
  );
};

export default UserBio;
