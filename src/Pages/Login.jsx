import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Capture the previous path the user was trying to access
  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      // Redirect to the previous page after login
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);

      // Handle specific Firebase Auth errors
      switch (error.code) {
        case "auth/wrong-password":
          setError("Incorrect password. Please try again.");
          break;
        case "auth/user-not-found":
          setError("No account found with this email.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address format.");
          break;
        case "auth/too-many-requests":
          setError("Too many login attempts. Please try again later.");
          break;
        default:
          setError("Failed to log in. Please check your credentials.");
      }
    }
    setLoading(false);
  }

  async function handleGoogleSignIn() {
    try {
      setLoading(true);
      await signInWithGoogle();

      // Redirect to the previous page after login
      navigate(from);
    } catch (error) {
      console.error(error);

      switch (error.code) {
        case "auth/popup-closed-by-user":
          setError("Google sign-in popup closed. Please try again.");
          break;
        case "auth/cancelled-popup-request":
          setError("Cancelled sign-in request. Please try again.");
          break;
        default:
          setError("Failed to sign in with Google. Please try again.");
      }
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
          <h3 className="text-primary">NeuroAI!</h3>
          <p>Sign in to your Account</p>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" ref={emailRef} required className="form-control" />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required className="form-control" />
            </Form.Group>
            <Button className="btn btn-primary" disabled={loading} type="submit">
              Sign In
            </Button>
            <div className="social-media-buttons">
              <Button className="btn btn-light border" onClick={handleGoogleSignIn} disabled={loading}>
                <FcGoogle size={20} /> Sign In with Google
              </Button>
            </div>      
          </Form>
          <div className="links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <br />
            <Link to="/signup">Need an Account? Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}
