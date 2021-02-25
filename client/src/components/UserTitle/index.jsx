import React from "react";

const UserTitle = ({ width, height, src, position, title }) => {
  return (
    <div className="column is-flex" style={{ justifyContent: position }}>
      <section
        className="button title is-black"
        style={{ backgroundColor: "black", height: "55px", width: "400px" , borderRadius : "100px" }}
      >{title}</section>
    </div>
  );
};

export default UserTitle;
