import React from "react";
import TinderCards from "../components/cardComponent/";
import SwipeButtons from "../components/swipeButtonComponent";
import Header from "../components/headerComponent";

function homePage() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default homePage;
