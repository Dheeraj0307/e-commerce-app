import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './context/cart_context';
import { FilterProvider } from './context/filter_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PayPalScriptProvider options={{ "client-id": "AWmt41HyEq1TBF4BVbN0xC7N7MWTySVFN0ri4inDkzOcKUtcCCErghn2y_SLLrT8CX7fPtUI4pjgP1o_" }}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </PayPalScriptProvider>
  </BrowserRouter>
);
