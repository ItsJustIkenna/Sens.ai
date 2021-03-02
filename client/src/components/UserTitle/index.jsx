import React from "react";
import "./index.css";

const UserTitle = ({ width, height, src, position, title , onClickBio}) => {
  return (
    <div
      className="column"
      style={{ justifyContent: position, display: "flex" }}
    >
      <h1
        className="usertitle title"
        id="usertitle"
        style={{ textAlign: "center" }}
      >
        {title}
      </h1>
    </div>
  );
};

export default UserTitle;
