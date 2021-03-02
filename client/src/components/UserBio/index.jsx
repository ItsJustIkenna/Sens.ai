import React from "react";

const UserBio = ({ Description , onClickBio }) => {
  return (
    <div className="block" style={{ height : "auto" , width : "77%" , float : "right", paddingRight : "40px"}}>
        <h1 className="title is-4 has-text-white" style={{ textAlign : "left" , paddingTop : "18px" , float: "left"}} >Bio</h1><button className="add-btn" onClick={onClickBio} style={{margin: "10px 0px 0px 15px"}}>+</button>
        <p className="column is-12 has-text-white" style={{ textAlign : "left" , paddingTop : "6px" , float: "left"}} >{Description}</p>
    </div>
  );
};

export default UserBio;
