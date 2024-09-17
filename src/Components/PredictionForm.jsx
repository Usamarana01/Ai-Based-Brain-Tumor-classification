import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function PredictionForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientID, setPatientID] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientID.trim()) {
      errors.patientID = "Patient ID is required";
    }

    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 11) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }


    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientID("");
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
   

    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">NeuroAI</Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Enter Patient Data</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient ID:
            <input
              type="text"
              value={patientID}
              onChange={(e) => setPatientID(e.target.value)}
              required
            />
            {formErrors.patientID && <p className="error-message">{formErrors.patientID}</p>}
          </label>

          <br />
          <label>
            Patient Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          <label>
            Patient Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>

          <br />
          <label>
            Patient Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">Prefer not to say</option>
            </select>
            {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
          </label>

          <br />


          <br />
          <button type="submit" className="text-appointment-btn">
            Prediction
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Appointment details have been sent to the patient's phone number via SMS.</p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2024 NeuroAI. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default PredictionForm;
