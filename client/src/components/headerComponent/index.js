import * as React from "react";
import "./style.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";

function index() {
  return (
    <div className="header">
      <h2>I am header</h2>
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default index;
