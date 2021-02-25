import React from "react";

const UserPhoto = ({ width, height, src, position }) => {
  return (
    <div className="image" style={{ position : "relative" , left : "100px", bottom : "70px" , zIndex : "2"}}>
      <img src={src} alt="" width="200px"  height="200px" style={{borderRadius : "50%"}} />
    </div>
  );
};

export default UserPhoto;
