import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          NueroAI
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to BrainCare, your trusted online platform for brain tumor classification and expert medical guidance. Our mission is to provide accessible and personalized healthcare services to individuals seeking accurate diagnosis and treatment plans for brain tumors. By using our platform, you agree to the terms outlined in our Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is paramount to us. Our Privacy Policy outlines how we
          collect, use, and protect your personal and medical information. We
          ensure secure data handling, and you can trust that your information
          is treated with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        When using BrainCare, you agree to our Terms of Service. This includes guidelines for using our platform, interacting with our AI technology and medical experts, and the responsibilities of both parties.
        </p>

        <p className="legal-title">Brain Tumor Classification</p>
        <p className="legal-description">
        Our AI-powered platform helps classify brain tumors using your uploaded MRI scans. This service is not a replacement for in-person medical visits but serves as a convenient option for initial diagnosis and guidance. Accurate and complete information is crucial for the best possible results.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        BrainCare simplifies brain tumor diagnosis and treatment planning. You can:<br></br>
        1-Upload your MRI scan<br></br>
        2-Our AI technology classifies the brain tumor and predict Grade.<br></br>
        3-Receive a personalized report <br></br>
        4-Engage in virtual Chatbot for further guidance<br></br>
Remember, emergencies require immediate medical attention and should be directed to your local medical facility.


        </p>
      </div>

      <div className="legal-footer">
        <p>© 2024 NueroAI. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
