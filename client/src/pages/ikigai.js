import React from "react";
import Header from "../components/Header/index";
import Logo from "../components/Logo/index";
import Dropdown from "../components/Dropdown/index";

function Ikigai() {
  return (
    <div
      className="Ikigai"
      style={{ backgroundColor: "red", minHeight: "100vh" }}
    >
      {/* Login / Signup */}

      <Header />

      

      <section className="container is-widescreen has-padding-top-5">

      <Logo
          href="/"
          src="../Sensei.PNG"
          style={{ width: "20%" }}
          position="left"
        />

        {/* What do you love? Dropdown */}

        <div className="mb-2 is-6 has-text-white">What do you love?</div>

        <Dropdown 
          none = "select"
          option1 = "I love front-end coding"
          option2 = "I love design"
          option3 = "I love back-end coding"
          option4 = "I love Software Engineering"
          option5 = "I love Game Development"
          />

        {/* What are you good at? Dropdown */}

        <div className="mb-2 is-6 has-text-white">What are you good at?</div>

        <Dropdown 
          none = "select"
          option1 = "I love front-end coding"
          option2 = "I love design"
          option3 = "I love back-end coding"
          option4 = "I love Software Engineering"
          option5 = "I love Game Development"
          />

        {/* What does the world need? Dropdown */}

        <div className="mb-2 is-6 has-text-white">What does the world need?</div>

        <Dropdown 
          none = "select"
          option1 = "I love front-end coding"
          option2 = "I love design"
          option3 = "I love back-end coding"
          option4 = "I love Software Engineering"
          option5 = "I love Game Development"
          />

        {/* What can you be paid for? Dropdown */}

        <div className="mb-2 is-6 has-text-white">What can you be paid for?</div>

        <Dropdown 
          none = "select"
          option1 = "I love front-end coding"
          option2 = "I love design"
          option3 = "I love back-end coding"
          option4 = "I love Software Engineering"
          option5 = "I love Game Development"
          />

        {/* Generate Ikigai Button */}

        <div className="field">
          <p className="control">
            <button className="button is-success" id="generate-ikigai-btn">
            Generate Ikigai
            </button>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Ikigai;
