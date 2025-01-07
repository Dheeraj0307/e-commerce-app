import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import "./style.css";
import { useNavigate } from "react-router-dom";
import FormatPrice from '../../helpers/FormatPrice'


const CheckoutForm = ({ totalAmount }) => {
    const stripe = useStripe();
    const elements = useElements();

    console.log(totalAmount, 'ta')

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            console.error(error);
            alert("Payment failed: " + error.message);
        } else {
            console.log("Payment Method:", paymentMethod);

            elements.getElement(CardElement).clear();

            navigate("/payment-success");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
                className="StripeElement"
            />
            <button type="submit" className="payment-button" disabled={!stripe}>
                Pay  <FormatPrice price={totalAmount} />
            </button>
        </form>
    );
};

export default CheckoutForm