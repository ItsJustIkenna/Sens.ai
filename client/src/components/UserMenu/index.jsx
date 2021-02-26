import React from "react";
import UserPhoto from "../UserPhoto/index";
import UserBio from "../UserBio/index";
import UserProjects from "../UserProjects/index";
import ProfileMenu from "../ProfileMenu/index";
import ProjectsForm from "../ProjectsForm/index";

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
}) => {
  return (
    <div className="column is-11 is-flex" style={{ justifyContent: position }}>
      <UserPhoto src={src} />
      <section
        className="container"
        style={{
          backgroundColor: "black",
          minHeight: "250px",
          height: "auto",
          width: "100%",
          borderRadius: "100px",
        }}
      >
        <UserBio Description={bioDes} />
        <ProfileMenu />
        {/* <UserProjects Description="Project" option1={op1} /> */}
        <ProjectsForm
          handleSubmit={handleSubmit}
          projectTitle={projectTitle}
          setProjectTitle={setProjectTitle}
        />
      </section>
    </div>
  );
};

export default UserMenu;
