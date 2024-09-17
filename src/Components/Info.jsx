import React from "react";
import InformationCard from "./InformationCard";
import {faBrain,faPeopleLine,faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        Welcome to our cutting-edge brain tumor classification platform, where precision meets compassion. Utilizing advanced AI algorithms and expert neuro-radiological insights, our platform accurately analyzes MRI scans to identify and classify brain tumors with unprecedented speed and accuracy. By uploading your MRI scan, our innovative technology will provide a comprehensive diagnosis, empowering you and your medical team to make informed decisions and develop effective treatment plans, all in a secure and supportive environment.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Tumor Classification"
          description="Our AI system is designed to revolutionize brain tumor diagnosis. By analyzing MRI images, it rapidly and accurately identifies different types of brain tumors. This technology empowers healthcare professionals to detect tumors early, leading to improved patient outcomes and treatment plans."
          icon={faBrain}
        />

        <InformationCard
          title=" Patient History "
          description="Efficiently manage and access patient data with our comprehensive history management system. Securely store and retrieve medical records, imaging studies, and treatment plans. This centralized platform streamlines workflows, ensuring easy access to critical patient information for optimal care."
          icon={faPeopleLine}
        />

        <InformationCard
          title="Chatbot Assistant"
          description="Our AI-powered chatbot provides round-the-clock support and information. With natural language processing capabilities, it answers your questions, offers guidance, and enhances user experience. This virtual assistant is your reliable companion, available to assist you whenever needed."
          icon={faUserDoctor}
        />
      </div>
    </div>
  );
}

export default Info;
