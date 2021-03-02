import React from "react";
import UserPhoto from "../UserPhoto/index";
import UserBio from "../UserBio/index";
import UserProjects from "../UserProjects/index";
import ProfileMenu from "../ProfileMenu/index";
import CRUDMenu from "../CRUDMenu/index";
import '../UserTitle/index';

const UserMenu = ({
  width,
  height,
  src,
  position,
  bioDes,
  projDes,
  handleSubmit,
  option,
  op2,
  op3,
  op4,
  op5,
  projectTitle,
  setProjectTitle,
  id,
  title,
  onClick,
  onClickBio,
  onClickProjects
}) => {
  return (
    <div className="container" style={{ alignContent: position }}>
      {/* User Name Title Black */}

      <div
        className="column"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <h1
          className="usertitle title"
          style={{ textAlign: "center" }}
          id="usertitle"
        >
          {title}
      <button
        className="add-btn"
        onClick={onClickBio}
        style={{ float: "right" , margin: "-5px 0px 0px 15px" }}
      >
        +
      </button>
        </h1>
      </div>

      {/* Profile Container */}

      {/* User Picture */}

      <UserPhoto src={src} bottom="260px" left="0px" />
      <section
        className="column"
        style={{
          backgroundColor: "black",
          minHeight: "250px",
          height: "auto",
          width: "90%",
          borderRadius: "100px",
          float: "right",
        }}
      >
        {/* User Picture */}

        <UserBio Description={bioDes} onClickBio={onClickBio} />
        <ProfileMenu />
        <UserProjects Description="Project" onClickProjects={onClickProjects} option={option} id={id} />
        {/*  */}
      </section>
      <div className="column is-12" style={{ display: "inline-block" }}>
        <CRUDMenu onClick={onClick} />
      </div>
    </div>
  );
};

export default UserMenu;
