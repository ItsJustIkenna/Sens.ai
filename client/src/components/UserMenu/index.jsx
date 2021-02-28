import React from "react";
import UserPhoto from "../UserPhoto/index";
import UserBio from "../UserBio/index";
import UserProjects from "../UserProjects/index";
import ProfileMenu from "../ProfileMenu/index";
import ProjectsForm from "../ProjectsForm/index";
import CRUDMenu from "../CRUDMenu/index";
import Button from "../Button/index";

const UserMenu = ({
  width,
  height,
  src,
  position,
  bioDes,
  projDes,
  handleSubmit,
  op1,
  op2,
  op3,
  op4,
  op5,
  projectTitle,
  setProjectTitle,
  id,
  title,
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
        </h1>
      </div>

      {/* Profile Container */}

      {/* User Picture */}

      <UserPhoto src={src} />
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

        <UserBio Description={bioDes} />
        <ProfileMenu />
        <UserProjects Description="Project" option1={op1} id={id} />
        {/* <ProjectsForm
          handleSubmit={handleSubmit}
          projectTitle={projectTitle}
          setProjectTitle={setProjectTitle}
        /> */}
      </section>
      <div className="column is-12" style={{ display: "inline-block" }}>
        <CRUDMenu />
      </div>
    </div>
  );
};

export default UserMenu;
