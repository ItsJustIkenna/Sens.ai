import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ikigai from "./pages/ikigai";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import userProfile from "./pages/user-profile";
import recruiterProfile from "./pages/recruiter-profile";


function App() {

  return (
    <Router>
      <Switch>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/pages/login" exact component={Login} />
          <Route path="/pages/signup" exact component={Signup} />
          <Route path="/pages/ikigai" exact component={Ikigai} />
          <Route path="/pages/user-profile" exact component={userProfile} />
          <Route
            path="/pages/recruiter-profile"
            exact
            component={recruiterProfile}
          />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
