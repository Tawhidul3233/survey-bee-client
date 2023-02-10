import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

const PayNow = () => {
    return (
        <div className='h-screen'>
            <div className='md:w-1/3 my-12 md:ml-64 bg-white shadow-xl p-8'>
                <h1 className='mb-8 text-lg ml-12'>Proceed to your payment.</h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    )

};
export default PayNow;