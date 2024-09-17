import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import Prediction from "./Pages/Prediction";
import Blogs from "./Pages/Blogs";
import DiscussionForum from "./Pages/DiscussionForum";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BlogDetails from "./Pages/BlogDetails";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import UpdateProfile from "./Pages/UpdateProfile";
import PrivateRoute from "./Pages/PrivateRoute";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SubscriptionPlans from './Pages/SubscriptionPlans';
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckoutPage from './Pages/CheckoutPage'
const stripePromise = loadStripe('pk_test_51PqHTU06Pf2KR11F0d3wQG0S3aG6qKcRlmY19B6j4TZ3sXTrS3mj9XAXQyq7HiRDtJmv4v4xt4qnspC0Y0B2VLIg00sJdo73F7');

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/legal" element={<Legal />} />
          <Route element={<PrivateRoute />}>

            <Route path="/discussionforum" element={<DiscussionForum />} />
            <Route path="/updateprofile" element={<UpdateProfile />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route 
              path="/pricing" 
              element={
                <Elements stripe={stripePromise}>
                  <SubscriptionPlans />
                </Elements>
              } 
            />
            <Route 
              path="/success" 
              element={
                <Elements stripe={stripePromise}>
                  <Success />
                </Elements>
              } 
            />
            <Route 
              path="/cancel" 
              element={
                <Elements stripe={stripePromise}>
                  <Cancel />
                </Elements>
              } 
            />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
