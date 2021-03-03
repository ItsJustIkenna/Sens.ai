import React, { useState } from "react";
import UserPhoto from "../UserPhoto/index";
import UserBio from "../UserBio/index";
import UserProjects from "../UserProjects/index";
import ProfileMenu from "../ProfileMenu/index";
import CRUDMenu from "../CRUDMenu/index";
import "../UserTitle/index";

const UserMenu = ({
  src,
  position,
  bioDes,
  option,
  id,
  title,
  onClick,
  onClickBio,
  onClickProjects,
}) => {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit(!edit)
  }
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
          {edit && (
            <button
              className="add-btn grow"
              onClick={onClickBio}
              style={{ float: "right", margin: "-5px 0px 0px 15px" }}
            >+</button>
          )}
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

        <UserBio Description={bioDes} onClickBio={onClickBio} edit={edit} id={id} />
        <ProfileMenu />
        <UserProjects
          Description="Project"
          onClickProjects={onClickProjects}
          option={option}
          id={id}
          edit={edit}
        />
        {/*  */}
      </section>
      <div className="column is-12" style={{ display: "inline-block" }}>
        <CRUDMenu onClick={onClick} toggleEdit = {toggleEdit} />
      </div>
    </div>
  );
};

export default UserMenu;
