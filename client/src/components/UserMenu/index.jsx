import React from "react";

const UserMenu = ({ width, height, src, position }) => {
  return (
    <div className="column is-flex" style={{ justifyContent: position }}>
      <section
        className="container"
        style={{ backgroundColor: "black", height: "55vh", width: "80%" , borderRadius : "100px" }}
      ></section>
    </div>
  );
};

export default UserMenu;
