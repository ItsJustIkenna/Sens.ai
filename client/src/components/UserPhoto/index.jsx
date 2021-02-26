import React from "react";

const UserPhoto = ({ width, height, src, position }) => {
  return (
    <div
      className="circle"
      style={{
        position: "relative",
        left: "100px",
        bottom: "70px",
        zIndex: "2",
        width: "300px",
        height: "300px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={src} alt="" style={{ borderRadius: "50%" }} />
    </div>
  );
};

export default UserPhoto;

// overflow: hidden;
//  display: flex;
//  justify-content: center;
//  align-items: center;
