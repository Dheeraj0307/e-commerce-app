import './App.css';
import './page-layout.css';
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import '../src/pages/css/login-style.css';
import ScrollToTop from './component/smoothScroll';
import Layout from './layout';
import ProtectRoute from './Protected/ProtectRoute';


// 🔥 Lazy Loading Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const Products = lazy(() => import('./pages/Products'));
const LoginPageNew = lazy(() => import('./pages/LoginPageNew'));
const PerProduct = lazy(() => import('./pages/PerProduct'));
const BuyNow = lazy(() => import('./pages/BuyNow'));
const Cart = lazy(() => import('./pages/new-cart/Cart'));
const Formik = lazy(() => import('./form-using-yup&formik/Formik'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Filtered = lazy(() => import('./pages/Filtered'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'));
const Pagination = lazy(() => import('./component/Pagination'));
const Error = lazy(() => import('./pages/Error'));


function App() {


  return (

    <div className='app-layout'>

      <main className='app-content'>
        <ScrollToTop />
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route path='/' element={<HomePage />} />
              <Route path='/products' element={<Products />} />
              <Route path='/perProduct/:id' element={<PerProduct />} />
              <Route path='/buyNow' element={<BuyNow />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/contact-form' element={<Formik />} />
              <Route path='/aboutUs' element={<AboutUs />} />
              <Route path='/filtered' element={<Filtered />} />
              <Route path='/payment' element={<PaymentPage />} />
              <Route path='/payment-success' element={<PaymentSuccess />} />
              <Route path='/pagination' element={<Pagination />} />
              <Route path='*' element={<Error />} />
            </Route>
            <Route path='/loginNew' element={<ProtectRoute> <LoginPageNew /></ProtectRoute>} />

          </Routes>
        </Suspense>
      </main>


    </div>

  );
}

export default App;
