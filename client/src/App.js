import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import AccountCreationPage from "./pages/accountCreationPage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import SignUpPage from "./pages/signupPage";
import Navbar from "./components/navbarComponent";


function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path={["/", "/landingPage"]}>
              <LandingPage />
            </Route>
            <Route exact path="/signinPage">
              <SignUpPage />
            </Route>
            <Route exact path="/accountCreationPage">
              <AccountCreationPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/homePage">
              <HomePage />
            </Route>
            <Route exact path="/profilePage">
              <ProfilePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
