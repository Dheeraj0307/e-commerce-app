import React from "react";
import { Link } from "react-router-dom";

import './css/paymentSuccess.css'

const PaymentSuccess = () => (
    <div className="payment-success" style={{ textAlign: "center", marginTop: "50px" }}>
        <div className="success-icon"></div>

        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase.</p>
        <Link to="/products">
            <button >Back to Products</button>
        </Link>
    </div>
);

export default PaymentSuccess; 