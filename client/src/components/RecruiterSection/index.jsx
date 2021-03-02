import React from "react";
import RecruiterPhoto from "../RecruiterPhoto/index";
import Button from "../Button/index";
import UserProjects from "../UserProjects/index";
import ProfileMenu from "../ProfileMenu/index";
import CRUDMenu from "../CRUDMenu/index";
import "../UserTitle/index";

const RecruiterSection = ({
  width,
  height,
  src,
  position,
  bioDes,
  projDes,
  handleSubmit,
  option,
  op2,
  op3,
  op4,
  op5,
  projectTitle,
  setProjectTitle,
  id,
  title,
  onClick,
  onClickBio,
  onClickProjects,
}) => {
  return (
    <div
      className="container"
      style={{ alignContent: position, display: "table" }}
    >
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

      <section className="columns is-vcentered" style={{ minHeight: "350px" , float: "left" }}>
        <Button
          className="circle-btn mr-6 "
          title="Left"
          padding="45px 42px 30px 42px"
        />
      </section>

      <RecruiterPhoto src={src} bottom="320px" left="160px" />

      <section
        className="column"
        style={{
          backgroundColor: "black",
          minHeight: "250px",
          height: "auto",
          width: "80%",
          borderRadius: "100px",
          float: "left",
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
          <p
            className="column is-12 has-text-white"
            style={{ textAlign: "left", paddingTop: "6px", float: "left" }}
          >
            "www.macrosoft.com"
          </p>
        </div>
      </section>

      <section className="columns is-vcentered" style={{ minHeight: "350px" }}>
        <Button
          className="circle-btn ml-6 "
          title="Right"
          padding="45px 37px 30px 37px"
        />
      </section>

      <div className="column is-12" style={{ display: "inline-block" }}>
        <h1
          className=" has-text-white has-text-centered"
          style={{
            fontSize: "64px",
            fontWeight: "700",
            letterSpacing: "3px",
            padding: "0px 0px 0px 0px",
          }}
        >
          "Could this be your match?"
        </h1>
      </div>
    </div>
  );
};

export default RecruiterSection;
