import React from "react";
import img from "../../img/black-women-in-the-workplace.jpg";
import logo from "../../img/higher-me-logo.png";
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
              <img className="navbar__logo" src={logo} alt="" />
              <h4> Login to your account</h4>
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
                      type="password"
                      placeholder="Password"
                      className="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button type="button" className="btn1">
                      Login
                    </button>
                  </div>
                </div>
                <a href="#">Forgot password</a>
                <p>
                  Don't have an account? <a href="#">Register here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default index;
