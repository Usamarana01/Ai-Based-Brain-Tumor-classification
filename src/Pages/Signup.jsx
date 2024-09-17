import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const centerRef = useRef();
  const fullNameRef = useRef(); // Reference for full name
  const { signup, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    if (!centerRef.current.value) {
      return setError("Please select a center.");
    }

    try {
      setError("");
      setLoading(true);

      // Pass full name to signup function
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        centerRef.current.value,
        fullNameRef.current.value
      );
      setSignedUp(true);
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  async function handleGoogleSignIn() {
    try {
      setLoading(true);
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Failed to sign in with Google");
      setLoading(false);
    }
  }

  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #81ecec, #6c5ce7);
            color: #333;
            font-family: "Poppins", sans-serif;
            background: url('https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center/cover;
          }
          .container {
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            width: 80%;
            opacity: 90%;
          }
          .card {
            display: flex;
            width: 80%;
            max-width: 1200px;
            background: #fff;
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            padding: 2.5rem;
            box-sizing: border-box;
            text-align: center;
            transition: transform 0.3s ease-in-out;
            overflow: hidden;
          }
          .card:hover {
            transform: translateY(-5px);
          }
          .card h3 {
            color: #333;
            font-weight: 600;
          }
          .card-content {
            padding: 2rem;
            width: 50%;
            box-sizing: border-box;
          }
          .form-group {
            text-align: left;
          }
          .form-group label {
            display: block;
            color: #666;
            margin-top: 5px;
            font-size: 0.9rem;
          }
          .form-control {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-sizing: border-box;
            font-size: 1rem;
          }
          .form-control:focus {
            border-color: #0000FF;
            box-shadow: #0000FF;
          }
          .btn {
            display: block;
            width: 100%;
            padding: 0.8rem;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: bold;
            margin-top: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .social-media-buttons {
            margin-top: 15px;
          }
          .links {
            margin-top: 5px;
            font-size: 0.9rem;
          }
          .links a {
            text-decoration: none;
          }
          .links a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="container">
        <div className="card">
          <h3>NeuroAI!</h3>
          <p>Create your Account</p>
          {error && <Alert variant="danger">{error}</Alert>}
          {signedUp && (
            <Alert variant="success">
              Signed up successfully. Please go to login.
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group" id="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                ref={fullNameRef}
                placeholder="Enter your Full Name"
                required
              />
            </Form.Group>
            <Form.Group className="form-group" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Enter your Email"
                required
              />
            </Form.Group>
            <Form.Group className="form-group" id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="form-group" id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Confirm Password"
                required
              />
            </Form.Group>
            <Form.Group className="form-group" id="center">
              <Form.Label>Select Your Center</Form.Label>
              <Form.Control as="select" ref={centerRef} required>
                <option value="">Select an option</option>
                <option value="Gov MRI Center">Gov MRI Center</option>
                <option value="Pvt MRI Center">Pvt MRI Center</option>
                <option value="Private Lab">Private Lab</option>
                <option value="Hospital">Hospital</option>
                <option value="Clinic">Clinic</option>
              </Form.Control>
            </Form.Group>
            <Button className="btn btn-primary" disabled={loading} type="submit">
              Sign Up
            </Button>
            <div className="social-media-buttons">
              <Button
                className="btn btn-light border"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                <FcGoogle size={20} /> Sign Up with Google
              </Button>
            </div>
          </Form>
          <div className="links">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
}
