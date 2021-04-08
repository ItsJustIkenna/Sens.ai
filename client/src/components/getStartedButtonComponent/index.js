import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      <Link to="/signuppage">
        <Button variant="contained">Get Started</Button>
      </Link>
    </div>
  );
}

export default index;
