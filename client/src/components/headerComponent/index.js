import * as React from "react";
import "./style.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../img/higher-me-symbol.png";
import ForumIcon from "@material-ui/icons/Forum";

function index() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <IconButton>
        <img className="header__logo" src={logo} alt="" />
      </IconButton>

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default index;
