import React from "react";
import RecruiterPhoto from "../RecruiterPhoto/index";
import Button from "../Button/index";
import { Spring } from "react-spring/renderprops";
import { Transition, animated } from 'react-spring/renderprops'

const RecruiterSection = ({ src, position, company , name , bio , recruiterPosition , website }) => {
  function refreshPage() {
    window.location.reload(false);
  }
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
          {company}
        </h1>
      </div>

      <section
        className="columns is-vcentered"
        style={{ minHeight: "350px", float: "left" }}
      >
        <Button
          className="circle-btn mr-6 "
          title="Left"
          padding="45px 42px 30px 42px"
          onClick={refreshPage}
          // onClick={toggle}
        />
      </section>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            {" "}
            <RecruiterPhoto src={src} bottom="320px" left="160px" recruiterPosition={recruiterPosition} />
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
                  style={{
                    textAlign: "left",
                    paddingTop: "18px",
                    float: "left",
                  }}
                >
                  {name}
                </h1>
                <p
                  className="column is-12 has-text-white"
                  style={{
                    textAlign: "left",
                    paddingTop: "6px",
                    float: "left",
                  }}
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
                  style={{
                    textAlign: "left",
                    paddingTop: "18px",
                    float: "left",
                  }}
                >
                  Positions
                </h1>
                <p
                  className="column is-12 has-text-white"
                  style={{
                    textAlign: "left",
                    paddingTop: "6px",
                    float: "left",
                  }}
                >
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
                  style={{
                    textAlign: "left",
                    paddingTop: "18px",
                    float: "left",
                  }}
                >
                  Ikigai
                </h1>
                <p
                  className="column is-12 has-text-white"
                  style={{
                    textAlign: "left",
                    paddingTop: "6px",
                    float: "left",
                  }}
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
                  style={{
                    textAlign: "left",
                    paddingTop: "18px",
                    float: "left",
                  }}
                >
                  Website
                </h1>
                <p
                  className="column is-12 has-text-white"
                  style={{
                    textAlign: "left",
                    paddingTop: "6px",
                    float: "left",
                  }}
                >
                  {website}
                </p>
              </div>
            </section>
          </div>
        )}
      </Spring>
      <section className="columns is-vcentered" style={{ minHeight: "350px" }}>
        <Button
          className="circle-btn ml-6 "
          title="Right"
          padding="45px 37px 30px 37px"
          onClick={refreshPage}
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
