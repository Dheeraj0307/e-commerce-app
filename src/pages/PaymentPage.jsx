import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from '../component/payments/Stripe';
import FormatPrice from '../helpers/FormatPrice'

const stripePromise = loadStripe("pk_test_51QaY6PLimKtKK5JS4VEvBtZTZFewt3ELcmxRZ5WuWg1GFvp6iVSdgAWBEqIeUepf9cZBWMEXpPi07qoUQlMlYgzr00ZyOBKkL8");

const PaymentPage = () => {
    const location = useLocation();
    const { totalAmount } = location.state || { totalAmount: 0 };

    return (
        <div style={{ width: '100%', textAlign: 'center', marginTop: '50px', fontSize: '1.5rem ' }}>
            <h2>Payment Page</h2>
            <p>Total Amount: <FormatPrice price={totalAmount} /></p>
            <Elements stripe={stripePromise}>
                <Stripe totalAmount={totalAmount} />
            </Elements>
        </div>
    );
};

export default PaymentPage;