import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      <Link to="/recruitaccountcreationpage">
        <button class="button">Recruit</button>
      </Link>
    </div>
  );
}

export default index;
