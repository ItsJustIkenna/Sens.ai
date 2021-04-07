import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";

function index() {
  return (
    <div>
      <IconButton>
        <ArrowDropDownCircleIcon fontSize="large" className="header__icon"/>
      </IconButton>
    </div>
  );
}

export default index;
