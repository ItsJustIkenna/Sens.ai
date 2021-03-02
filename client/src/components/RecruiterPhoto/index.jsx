import React from "react";

const RecruiterPhoto = ({ bottom , left, src, position }) => {
  return ( 
    <div
      className="circle"
      style={{
        position: "absolute",
        bottom: bottom,
        left: left,
        zIndex: "2",
        width: "300px",
        height: "300px",
        display: "inline",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={src} alt="" style={{ borderRadius: "50%" , width: "300px", height: "300px"}} />
      <h1 style={{content: "block" , color: "black", backgroundColor: "white" , zIndex: 25 , textAlign : "center" , borderRadius: "25px" , fontWeight : "700" , fontSize : "20px" }}>South East-District Recruiter</h1>
    </div>
  );
};

export default RecruiterPhoto;

// overflow: hidden;
//  display: flex;
//  justify-content: center;
//  align-items: center;
