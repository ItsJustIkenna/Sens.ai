import React from "react";
import img from "../../img/black-men-in-the-workplace2.jpg";
import logo from "../../img/higher-me-logo.png";
import { Link } from "react-router-dom";
import "./style.css";

function index() {
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

              <form>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="name"
                      placeholder="Name"
                      className="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <textarea
                      type="bio"
                      placeholder="Bio"
                      className="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <Link to="/homepage/:id">
                      <button type="button" className="btn1">
                        Create Account
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

export default index;
