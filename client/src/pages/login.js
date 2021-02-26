import React from "react";
import Header from "../components/Header_Log_Page/index";


function Login() {



  return (
    <div className="Login" style={{backgroundColor: "red", minHeight: '100vh'}}>

      <div className="container is-widescreen" >

      {/* Header */}
      <Header />

      {/* Title */}

      <div className="content">
      <h1 className="title has-text-black is-4">Login</h1>
    </div>

{/* Form Username */}

      <div className="field">
  <p className="control has-icons-left has-icons-right">
  <div className="mb-2 is-6 has-text-white">Username:</div>
    <input className="input" type="text" placeholder="" style={{backgroundColor : "transparent"}}/>
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

{/* Form Login Button */}

<div className="field">
  <p className="control">
  <a className="button is-light is-rounded" href="../../pages/user-profile" >
            Log in
          </a>
  </p>
</div>

{/* Form Login Button */}

<div className="field">
  <p className="control">
    <button className="button is-success" id="login-facebook-btn">
      Login with Facebook
    </button>
  </p>
</div>

{/* Form Login Button */}

<div className="field">
  <p className="control">
    <button className="button is-success" id="login-google-btn">
      Login with Google+
    </button>
  </p>
</div>

{/* Form Login Button */}

<div className="field">
  <p className="control">
    <button className="button is-success" id="login-linkedin-btn">
      Login with Linkedin
    </button>
  </p>
</div>


    </div>
    </div>
  );
}

export default Login;
