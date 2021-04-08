import * as React from "react";
import "./style.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import symbol from "../../img/higher-me-symbol.png";
import { Link } from "react-router-dom";
import ForumIcon from "@material-ui/icons/Forum";

function index() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <Link to="/">
        <IconButton>
          <img className="header__symbol" src={symbol} alt="" />
        </IconButton>
      </Link>

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default index;
