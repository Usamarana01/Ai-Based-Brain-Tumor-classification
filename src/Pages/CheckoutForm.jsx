import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import 'bootstrap/dist/css/bootstrap.min.css';

const CheckoutForm = ({ priceId }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Call your backend to create the Checkout Session
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);

      // Further processing (e.g., send payment method to backend, create a subscription)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="form-group">
        <label htmlFor="card-element" className="font-weight-bold">
          Credit or Debit Card
        </label>
        <CardElement
          id="card-element"
          className="form-control p-2"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#495057',
                '::placeholder': {
                  color: '#6c757d',
                },
              },
              invalid: {
                color: '#dc3545',
              },
            },
          }}
        />
      </div>
      <button
  type="submit"
  className="btn btn-primary mt-4 d-flex mx-auto justify-content-center"
  style={{
     backgroundColor: '#1289c4', 
    color: '#ffffff'
  }}
  disabled={!stripe}
>
  Subscribe
</button>

    </form>
  );
};

export default CheckoutForm;
