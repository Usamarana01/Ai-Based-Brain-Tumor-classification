import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        At <span style={{fontWeight:"bold"}}>NueroAI</span>, we are dedicated to harnessing the power of artificial intelligence to transform brain tumor diagnosis. Our mission is to develop cutting-edge solutions that improve patient outcomes by enabling early detection and accurate classification of brain tumors.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title=" Upload MRI Image"
          description=" Easily upload your MRI image to our platform. Our secure system ensures your data privacy."
        />

        <SolutionStep
          title="Classification"
          description="Our advanced AI model provides precise classification of the detected tumor type and grade predictiob."
        />

        <SolutionStep
          title="Maintain History"
          description="Gain valuable insights into your health journey through historical data."
        />
      </div>
    </div>
  );
}

export default About;
