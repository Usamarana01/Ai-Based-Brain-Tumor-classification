// Doctors.js
import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/Profile-1.jpg";
import profile2 from "../Assets/Profile-2.jpg";
import profile3 from "../Assets/Profile-3.jpg";

import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Team</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Umar Khan "
          title="MBBS, FCPS (Nuero Surgon) "
         
        />
        <DoctorCard
          img={profile2}
          name="Mahnoor"
          title="Web developer & Project Manager"

        />
        <DoctorCard
          img={profile3}
          name="Muhammad Usama"
          title="Machine Learning Engineer"

        />
      </div>
    </div>
  );
}

export default Doctors;
