import React, {useState} from "react";
import Header from "../components/Header_Log_Page/index";

function Signup() {
  
  return (
    <div
      className="Signup"
      style={{ backgroundColor: "red", minHeight: "100vh" }}
    >
      <div className="container is-widescreen">

        <Header />
        
        {/* Title */}

        <div className="content">
          <h1 className="title has-text-black is-4">Sign up</h1>
        </div>

        {/* Form Username */}

        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <div className="mb-2 is-6 has-text-white">Username:</div>
            <input
              className="input"
              type="text"
              placeholder=""
              style={{ backgroundColor: "transparent" }}
              id="sign-up-username"
              onSubmit=""
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>

        {/* Form Email */}

        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <div className="mb-2 is-6 has-text-white">Email:</div>
            <input
              className="input"
              type="email"
              placeholder=""
              style={{ backgroundColor: "transparent" }}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>

        {/* Form Password */}

        <div className="field">
          <p className="control has-icons-left">
            <div className="mb-2 is-6 has-text-white">Password:</div>
            <input
              className="input"
              type="password"
              placeholder=""
              style={{ backgroundColor: "transparent" }}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>

        {/* Form Confirm Password */}

        <div className="field">
          <p className="control has-icons-left">
            <div className="mb-2 is-6 has-text-white">Comfirm Password:</div>
            <input
              className="input"
              type="password"
              placeholder=""
              style={{ backgroundColor: "transparent" }}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>

        {/* Form Sign Up Button */}

        <div className="field">
          <p className="control">
          <a className="button is-light is-rounded" href="../../pages/recruiter-profile" >
            Sign up
          </a>
          </p>
        </div>

        {/* Form Sign Up Facebook Button */}

        <div className="field">
          <p className="control">
            <button className="button is-success" id="signup-facebook-btn">
              Sign up with Facebook
            </button>
          </p>
        </div>

        {/* Form Sign Up Google Button */}

        <div className="field">
          <p className="control">
            <button className="button is-success" id="signup-google-btn">
              Sign up with Google
            </button>
          </p>
        </div>

        {/* Form Sign Up Linkedin Button */}

        <div className="field">
          <p className="control">
            <button className="button is-success" id="signup-linkedin-btn">
              Sign up with Linkedin
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
