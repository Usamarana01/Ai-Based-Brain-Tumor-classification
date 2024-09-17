import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp,faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleBookAppointmentClick = () => {
    navigate("/Prediction");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
        {/* <p className="text-headline">🧠 Hope starts here</p> */}
          <h2 className="text-title">
          Detect Brain Tumors with AI-Powered MRI Analysis
          </h2>
          <p className="text-descritpion">
          Upload your MRI scan and our advanced AI algorithms will help detect and identify potential brain tumors. Get accurate insights and take the first step towards effective treatment and care.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faFileUpload} /> Upload MRI
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>2000+</p>
              <p>Receive Patients</p>
            </div>

            <div className="text-stats-container">
              <p>15+</p>
              <p>Experts</p>
            </div>

            <div className="text-stats-container">
              <p>3+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
