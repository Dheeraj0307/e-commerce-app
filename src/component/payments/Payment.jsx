import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const Payment = ({ totalAmount }) => {



    const handleCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: totalAmount,
                    },
                },
            ],
        });
    };

    const handleApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            console.log("Payment successful:", details);
            alert(`Transaction completed by ${details.payer.name.given_name}`);
        });
    };

    const handleError = (err) => {
        console.error("PayPal Error:", err);
        alert("An error occurred with PayPal.");
    };

    return (
        <div className="payment-container">
            <h2>Complete Your Payment</h2>
            <PayPalButtons
                style={{
                    layout: "vertical",
                    color: "blue",
                    shape: "pill",
                    label: "paypal",
                }}
                createOrder={handleCreateOrder}
                onApprove={handleApprove}
                onError={handleError}
            />
        </div>
    );
};

export default Payment;