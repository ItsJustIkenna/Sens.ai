import React from "react";

const RecruiterPhoto = ({ bottom, left, src, onClickPosition , edit , recruiterPosition }) => {
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
      <img
        src={src}
        alt=""
        style={{ borderRadius: "50%", width: "300px", height: "300px" }}
      />
      <h1
        style={{
          content: "block",
          color: "black",
          backgroundColor: "white",
          zIndex: 25,
          textAlign: "center",
          borderRadius: "25px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        {recruiterPosition}
      </h1>
      {edit && (
        <div className="column is-12" style={{ display: "table" , alignContent: "center"}}>
            <button
              className="add-btn grow"
               onClick={onClickPosition}
              style={{ margin: "10px 0px 0px 15px" }}
            >
              +
            </button>
            </div>
          )}
    </div>
  );
};

export default RecruiterPhoto;

// overflow: hidden;
//  display: flex;
//  justify-content: center;
//  align-items: center;
