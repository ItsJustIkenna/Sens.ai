import React from "react";
import UserPhoto from '../UserPhoto/index'

const UserMenu = ({ width, height, src, position }) => {
  return (
    <div className="column is-flex" style={{ justifyContent: position }}>
        <UserPhoto src={src} />
      <section
        className="container"
        style={{ backgroundColor: "black", height: "55vh", width: "100%" , borderRadius : "100px" }}
      ></section>
    </div>
  );
};

export default UserMenu;
