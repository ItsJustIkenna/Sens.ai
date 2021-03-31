import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import AccountCreationPage from "./pages/accountCreationPage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import SignUpPage from "./pages/signupPage";
import Navbar from "./components/navbarComponent";
import "./App.css";

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
            <Route>
              <SignUpPage />
            </Route>
            <Route>
              <AccountCreationPage />
            </Route>
            <Route>
              <LoginPage />
            </Route>
            <Route>
              <HomePage />
            </Route>
            <Route>
              <ProfilePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
