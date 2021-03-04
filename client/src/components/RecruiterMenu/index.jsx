import React, { useState } from "react";
import RecruiterPhoto from "../RecruiterPhoto/index";
import CRUDMenu from "../CRUDMenu/index";
import "../UserTitle/index";

const RecruiterMenu = ({ src, position, title, onClick, onClickName , onClickCompany , onClickWebsite , onClickPositions , bio , website , company , recruiterPosition , onClickOpenPositions , openPosition }) => {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit(!edit);
  };
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
          {company}
          {edit && (
            <button
              className="add-btn grow"
              onClick={onClickCompany}
              style={{ float: "right", margin: "-5px 0px 0px 15px" }}
            >+</button>
          )}
        </h1>
      </div>

      <RecruiterPhoto src={src} bottom="300px" left="20px" edit={edit} onClickPosition={onClickPositions}  recruiterPosition={recruiterPosition} />

      <section
        className="column"
        style={{
          backgroundColor: "black",
          minHeight: "250px",
          height: "auto",
          width: "100%",
          borderRadius: "100px",
          float: "right",
        }}
      >
        {/* Recruiter Name */}

        <div
          className="block"
          style={{
            height: "auto",
            width: "50%",
            float: "right",
            paddingRight: "40px",
          }}
        >
          <h1
            className="title is-4 has-text-white"
            style={{ textAlign: "left", paddingTop: "18px", float: "left" }}
          >
            {title}
          </h1>
          {edit && (
            <button
              className="add-btn grow"
              onClick={onClickName}
              style={{ margin: "10px 0px 0px 15px" }}
            >
              +
            </button>
          )}
          <p
            className="column is-12 has-text-white"
            style={{ textAlign: "left", paddingTop: "6px", float: "left" }}
          >
            {bio}
          </p>
        </div>
        {/* Recruiter Open Positions */}

        <div
          className="block"
          style={{
            height: "auto",
            width: "50%",
            float: "right",
            paddingRight: "0px",
            paddingLeft: "340px",
          }}
        >
          <h1
            className="title is-4 has-text-white"
            style={{ textAlign: "left", paddingTop: "18px", float: "left" }}
          >
            Positions
          </h1>
          {edit && (
            <button
              className="add-btn grow"
              onClick={onClickOpenPositions}
              style={{ margin: "10px 0px 0px 15px" }}
            >
              +
            </button>
          )}
          <p
            className="column is-12 has-text-white"
            style={{ textAlign: "left", paddingTop: "6px", float: "left" }}
          >
            {/* {openPosition} */}
            Software Developer
          </p>
        </div>

        {/* Recruiter Ikigai */}

        {/* <div
          className="block"
          style={{
            height: "auto",
            width: "50%",
            float: "right",
            paddingRight: "40px",
          }}
        >
          <h1
            className="title is-4 has-text-white"
            style={{ textAlign: "left", paddingTop: "18px", float: "left" }}
          >
            Ikigai
          </h1>
          {edit && (
            <button
              className="add-btn grow"
              onClick={onClickBio}
              style={{ margin: "10px 0px 0px 15px" }}
            >
              +
            </button>
          )}
          <p
            className="column is-12 has-text-white"
            style={{ textAlign: "left", paddingTop: "6px", float: "left" }}
          >
            "Start Up Founder"
          </p>
        </div> */}

        {/* Recruiter Website */}

        <div
          className="block"
          style={{
            height: "auto",
            width: "50%",
            float: "left",
            paddingRight: "0px",
            paddingLeft: "340px",
          }}
        >
          <h1
            className="title is-4 has-text-white"
            style={{ textAlign: "left", paddingTop: "18px", float: "left" }}
          >
            Website
          </h1>
          {edit && (
            <button
              className="add-btn"
              onClick={onClickWebsite}
              style={{ margin: "10px 0px 0px 15px" }}
            >
              +
            </button>
          )}
          
          <p
            className="column is-12 has-text-white"
            style={{ textAlign: "left", paddingTop: "6px", float: "left" }}
          >
            {website}
          </p>
          
        </div>
      </section>

      <div className="column is-12" style={{ display: "inline-block" }}>
        <CRUDMenu onClick={onClick} toggleEdit={toggleEdit} />
      </div>
    </div>
  );
};

export default RecruiterMenu;
