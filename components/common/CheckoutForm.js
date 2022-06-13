import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const CheckoutForm = ({ singleCourse }) => {
   // update paymet method
   const [updatePaymentInfo, setUpdatePaymentInfo] = useState('');
   // distructure singleCourse
   const { price, _id } = singleCourse;
   // useStripe
   const stripe = useStripe();
   // useElements
   const elements = useElements();
   // setErrorMsg
   const [errorMsg, setErrorMsg] = useState('');
   // setSuccessMsg
   const [successMsg, setSuccessMsg] = useState('');
   // setClientSecret
   const [clientSecret, setClientSecret] = useState('');
   // setProcessing
   const [processing, setProcessing] = useState(false);
   // useAuth
   const { user } = useAuth();
   // fetch create-payment-intent
   useEffect(() => {
      fetch('https://obscure-shelf-38503.herokuapp.com/create-payment-intent', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(singleCourse)
      })
         .then(res => res.json())
         .then(data => setClientSecret(data.clientSecret))
   }, [price, singleCourse])

   // handleSubmit
   const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
         return;
      }

      const card = elements.getElement(CardElement);

      if (card === null) {
         return;
      }

      setProcessing(true)
      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      });

      if (error) {
         setErrorMsg(error.message)
         Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: error.message,
            timer: 1500
         })
         setSuccessMsg('');
         setProcessing(false);
      }
      else {
         setErrorMsg('');
         setProcessing(false);
      }

      // payment intent
      const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
         clientSecret,
         {
            payment_method: {
               card: card,
               billing_details: {
                  name: user?.displayName,
               },
            },
         },
      );

      if (intentError) {
         setErrorMsg(intentError.message)
         setSuccessMsg('')
         Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: intentError.message,
            timer: 1500
         })
      }
      else {
         setErrorMsg('');
         setSuccessMsg('Your payment processed successfully');
         Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your payment processed successfully',
            timer: 1500
         })
         //   save to database 
         const payment = {
            amount: paymentIntent.amount,
            transaction: paymentIntent.client_secret.split('_secret')[0],
            created: paymentIntent.created,
            last4: paymentMethod.card.last4,
            userEmail: user?.email
         }
         const url = `https://obscure-shelf-38503.herokuapp.com/courses/${_id}`
         fetch(url, {
            method: 'PUT',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(payment)
         })
            .then(res => res.json())
            .then(data => setUpdatePaymentInfo(data))
      }
   }
   return (
      <>
         <form onSubmit={handleSubmit}>
            <CardElement
               options={{
                  style: {
                     base: {
                        fontSize: '16px',
                        color: '#424770',
                        border: '2px solid gray',
                        '::placeholder': {
                           color: '#aab7c4',
                        },
                     },
                     invalid: {
                        color: '#9e2146',
                     },
                  },
               }}
            />

            <div className="col-xxl-12 mt-10">
               <div className="course__popup-btn text-center" >
                  {processing ? <button type="button" className="tp-btn w-100 my-3" disabled>
                     <span className="spinner-border spinner-border-sm me-3" role="status" aria-hidden="true"></span>
                     Loading
                  </button> :
                     <button type="submit" className="tp-btn w-100 my-3" disabled={!stripe || successMsg}>
                        Pay ${singleCourse?.price}
                     </button>}
               </div>
            </div>

         </form>
      </>
   );
};

export default CheckoutForm;