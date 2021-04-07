import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import SignUpPage from "./pages/signupPage";
import RecruitAccountCreationPage from "./pages/recruitAccountCreationPage";
import RecruiterAccountCreationPage from "./pages/recruiterAccountCreationPage";
import UserPage from "./pages/userPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/homepage/:id" component={HomePage} />
          <Route exact path="/signuppage" component={SignUpPage} />
          <Route exact path="/userpage" component={UserPage} />
          <Route
            exact
            path="/recruitaccountcreationpage"
            component={RecruitAccountCreationPage}
          />
          <Route
            exact
            path="/recruiteraccountcreationpage"
            component={RecruiterAccountCreationPage}
          />
          <Route exact path="/loginpage" component={LoginPage} />
          <Route exact path="/profilepage/:id" component={ProfilePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
