import React from "react";
import Button from '../Button/index'

const ProfileMenu = () => {
  return (
    <div className="block" style={{ height : "100%" , width : "23%" , float : "left", paddingRight : "40px", paddingLeft: "12%" , paddingTop: "150px" }}>
      <Button className="button is-black border-color-white is-rounded" style= {{fontSize : "60px", borderRadius : "250px"}} title = "Overview"/>
      <Button className="button is-black border-color-white is-rounded" style= {{fontSize : "60px", borderRadius : "250px"}} title = "Skills"/>
      <Button className="button is-black border-color-white is-rounded" style= {{fontSize : "60px", borderRadius : "250px"}} title = "Education"/>
      </div>
  );
};

export default ProfileMenu;


// height: 100%;
// width: 20%;
// float: left;
// padding-right: 40px;
// padding-left: 80px;
// padding-top: 150px;
