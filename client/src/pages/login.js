import React from "react";
import Header from '../components/Header/index'
import Logo from '../components/Logo/index'

function Login() {

  return (
    <div className="Login" style={{backgroundColor: "red", minHeight: '100vh'}}>
      <Header />
      <div className="container is-widescreen" >
      <Logo src= "../Sensei.PNG" style= {{ width: "20%"}}/>


      <div className="field">
  <p className="control has-icons-left has-icons-right">
    <input className="input" type="email" placeholder="Email" />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control has-icons-left">
    <input className="input" type="password" placeholder="Password" />
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control">
    <button className="button is-success">
      Login
    </button>
  </p>
</div>


    </div>
    </div>
  );
}

export default Login;
