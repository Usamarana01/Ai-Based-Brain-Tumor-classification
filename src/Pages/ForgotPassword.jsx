import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
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

          .card h2 {
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
          <h3 className="text-primary">NeuroAI!</h3>
          <p>Password Reset</p>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" ref={emailRef} required className="form-control" />
            </Form.Group>
            <Button className="btn btn-primary" disabled={loading} type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="links mt-3">
            <Link to="/login">Login to your account ?</Link>
            <br />
            <Link to="/signup">Need an Account? Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}
