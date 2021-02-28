import React from "react";

const UserPhoto = ({ width, height, src, position }) => {
  return (
    <div
      className="circle"
      style={{
        position: "absolute",
        bottom: "260px",
        left: "50px",
        zIndex: "2",
        width: "275px",
        height: "275px",
        overflow: "hidden",
        display: "inline",
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
