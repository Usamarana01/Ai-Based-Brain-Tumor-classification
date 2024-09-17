import React from "react";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CheckoutPage.css"; // Import custom CSS

const stripePromise = loadStripe('pk_test_51PqHTU06Pf2KR11F0d3wQG0S3aG6qKcRlmY19B6j4TZ3sXTrS3mj9XAXQyq7HiRDtJmv4v4xt4qnspC0Y0B2VLIg00sJdo73F7');

const CheckoutPage = () => {
  const location = useLocation();
  const { priceId } = location.state || {}; // Get the priceId from the route state

  return (
    <div className="checkout-page container-fluid d-flex align-items-center justify-content-center my-5">
      <div className="card shadow-lg p-5">
        
        {/* Upper Text Section */}
        <div className="text-center mb-4">
          <h2 className="heading">Complete Your Purchase</h2>
          <p className="text-muted">
            You're just one step away from unlocking powerful features that will help you make better predictions and manage patient history effectively.
          </p>
        </div>

        {priceId ? (
          <Elements stripe={stripePromise}>
            <CheckoutForm priceId={priceId} />
          </Elements>
        ) : (
          <p className="text-center text-danger">No plan selected. Please go back and choose a plan.</p>
        )}

        {/* Lower Text Section */}
        <div className="text-center mt-4">
          <p className="text-muted">
            We value your trust. Our secure checkout process ensures your data is protected.
          </p>
          <p className="text-muted">
            Need help? <a href="/legal" className="text-primary">Contact our support team</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
