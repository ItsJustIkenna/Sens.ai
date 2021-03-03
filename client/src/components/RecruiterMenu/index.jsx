import React, { useState } from "react";
import RecruiterPhoto from "../RecruiterPhoto/index";
import CRUDMenu from "../CRUDMenu/index";
import "../UserTitle/index";

const RecruiterMenu = ({ src, position, title, onClick, onClickBio }) => {
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
          {title}
        </h1>
      </div>

      <RecruiterPhoto src={src} bottom="300px" left="20px" />

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat 1).
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
            Lead Developer.
          </p>
          <p
            className="column is-12 has-text-white"
            style={{ textAlign: "left", paddingTop: "6px", float: "left" }}
          >
            Lead Developer.
          </p>
          <p
            className="column is-12 has-text-white"
            style={{ textAlign: "left", paddingTop: "6px", float: "left" }}
          >
            Lead Developer.
          </p>
        </div>
        {/* Recruiter Ikigai */}

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
        </div>
        {/* Recruiter Website */}

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
            Website
          </h1>
          {edit && (
            <button
              className="add-btn"
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
            "www.macrosoft.com"
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
