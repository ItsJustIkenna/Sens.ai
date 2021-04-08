import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../img/black-women-in-the-workplace2.jpg";
import logo from "../../img/higher-me-logo.png";
import { Link } from "react-router-dom";
import "./style.css";

export default function Index() {
  return (
    <body>
      <section className="Form my-4 mx-5">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <img src={img} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-7 px-5 pt-5">
              <Link to="/">
                <img className="navbar__logo" src={logo} alt="" />
              </Link>

              <h4>Sign into your account</h4>
              <form>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="username"
                      placeholder="Username"
                      className="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <Link to="/userpage">
                      <button type="button" className="btn1 mt-3 mb-5">
                        Sign In
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}
