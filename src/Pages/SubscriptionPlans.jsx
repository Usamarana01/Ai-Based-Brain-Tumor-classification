import React from "react";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SubscriptionPlans.css";

const plans = [
  {
    name: 'Free',
    price: '$0/month',
    description: '10 Predictions a Month.',
    features: [
      <>
        <TiTick /> Brain Tumor Classification and Grade Prediction
      </>,
      <>
        <TiTick /> Chatbot access
      </>,
      <>
        <TiTick /> Multi-platform compatibility
      </>,
    ],
    buttonText: 'Sign Up',
    action: '/signup', // Redirect to signup page
  },
  {
    name: 'Pro',
    price: '$39.99/month',
    description: '200 Predictions per day.',
    features: [
      <>
        <TiTick /> Brain Tumor Classification and Grade Prediction
      </>,
      <>
        <TiTick /> Chatbot access
      </>,
      <>
        <TiTick /> Patient History Management
      </>,
    ],
    buttonText: 'Get started',
    priceId: 'price_1JhWwR2eZvKYlo2CKF9JD8MN', // Stripe price ID for Pro plan
  },
  {
    name: 'Scaler',
    price: '$179.88/month',
    description: 'Unlimited Predictions a day.',
    features: [
      <>
        <TiTick /> Brain Tumor Classification and Grade Prediction
      </>,
      <>
        <TiTick /> Chatbot access
      </>,
      <>
        <TiTick /> Patient History Management
      </>,
    ],
    buttonText: 'Get started',
    priceId: 'price_1JhWwR2eZvKYlo2CJKs0KD9L', // Stripe price ID for Scaler plan
  }
];

const SubscriptionPlans = () => {
  const navigate = useNavigate();

  const handleButtonClick = (plan) => {
    if (plan.action) {
      navigate(plan.action); // Redirect to action (e.g., /signup)
    } else {
      // Navigate to a dedicated checkout page with the selected plan's price ID
      navigate(`/checkout`, { state: { priceId: plan.priceId } });
    }
  };

  return (
    <div className="subscription-plans container my-5">
      {/* Upper Text Section */}
      <div className="text-center mb-5">
        <h1 className="display-4">Choose the Perfect Plan for You</h1>
        <p className="lead">
          Whether you're just getting started or you're ready to scale, we have a plan that fits your needs.
          Get access to powerful tools and services to help you with Brain Tumor Classification, Chatbot access, and more.
        </p>
      </div>
      
      <div className="row">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-4">
            <div className={`plan card ${plan.name.toLowerCase()}`}>
              <div className="card-body">
                <h2 className="card-title">{plan.name}</h2>
                <p className="price card-text">{plan.price}</p>
                <p className="description card-text">{plan.description}</p>
                <ul className="features-list list-unstyled">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="plan-button btn btn-primary d-flex mx-auto justify-content-center" 
                  onClick={() => handleButtonClick(plan)}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lower Text Section */}
      <div className="text-center mt-5">
        <p className="lead">
          Still unsure? Start with the Free plan and upgrade anytime. Join our community and take advantage of cutting-edge technology to assist you in making accurate predictions.
        </p>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
