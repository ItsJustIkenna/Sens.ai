import React from "react";
import Header from '../components/Header/index'
import Logo from '../components/Logo/index'

function Ikigai() {

  return (
    <div className="Ikigai" style={{backgroundColor: "red", minHeight: '100vh'}}>


      {/* Login / Signup */}
      <Header />
      <div className="container is-widescreen" >
      <Logo href="/" src= "../Sensei.PNG" style= {{ width: "20%"}} position = "left" />


      {/* Form What do you love? */}

      <div className="dropdown is-active">
  <div className="dropdown-trigger">
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a href="/" className="dropdown-item">
        Dropdown item
      </a>
      <a href="/" className="dropdown-item">
        Other dropdown item
      </a>
      <a href="/" className="dropdown-item">
        Active dropdown item
      </a>
      <a href="/" className="dropdown-item">
        Other dropdown item
      </a>
      <hr className="dropdown-divider" />
      <a href="/" className="dropdown-item">
        With a divider
      </a>
    </div>
  </div>
</div>


{/* Form Email */}

      <div className="field">
  <p className="control has-icons-left has-icons-right">
  <div className="mb-2 is-6 has-text-white">Email:</div>
    <input className="input" type="email" placeholder="" style={{backgroundColor : "transparent"}} />
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
    <input className="input" type="password" placeholder="" style={{backgroundColor : "transparent"}} />
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>

{/* Form Confirm Password */}

<div className="field">
  <p className="control has-icons-left">
  <div className="mb-2 is-6 has-text-white">Comfirm Password:</div>
    <input className="input" type="password" placeholder="" style={{backgroundColor : "transparent"}} />
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>


{/* Form Sign Up Button */}

<div className="field">
  <p className="control">
    <button className="button is-success" id="signup-btn">
      Sign up
    </button>
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

export default Ikigai;
