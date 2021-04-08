import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      <Link to="/recruiteraccountcreationpage">
        <button class="button">Recruiter</button>
      </Link>
    </div>
  );
}

export default index;
