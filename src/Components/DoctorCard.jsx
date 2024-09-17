// DoctorCard.js
import React from "react";
import "../Styles/Doctors.css";

function DoctorCard({ img, name, title, stars, reviews }) {
  return (
    <div className="doctor-card">
      <div className="doctor-img-wrapper">
        <img src={img} alt={`${name}`} className="doctor-img" />
      </div>
      <h3 className="doctor-name">{name}</h3>
      <p className="doctor-title">{title}</p>

    </div>
  );
}

export default DoctorCard;
