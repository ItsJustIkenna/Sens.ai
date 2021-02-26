import React from "react";
import UserPhoto from '../UserPhoto/index'
import UserBio from '../UserBio/index'
import UserProjects from '../UserProjects/index'
import ProfileMenu from '../ProfileMenu/index'
import Dropdown from "../Dropdown/index";


const UserMenu = ({ width, height, src, position, bioDes, projDes, op1, op2, op3, op4, op5 }) => {
  return (
    <div className="column is-11 is-flex" style={{ justifyContent: position }}>
        <UserPhoto src={src} />
      <section
        className="container"
        style={{ backgroundColor: "black", minHeight : "250px" , height: "auto", width: "100%" , borderRadius : "100px" }}
      >
          <UserBio Description= {bioDes} />
          <ProfileMenu />
          {/* <Dropdown 
          none = "select"
          option1 = {op1}
          option2 = {op2}
          option3 = {op3}
          option4 = {op4}
          option5 = {op5}
          /> */}
          <UserProjects Description="Project " />
        
      </section>
    </div>
  );
};

export default UserMenu;
