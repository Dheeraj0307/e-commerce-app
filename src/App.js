import './App.css';
import './page-layout.css';
import { Routes, Route } from "react-router-dom";
import PerProduct from './pages/PerProduct';
import React, { useCallback, useState } from 'react';
import LoginPageNew from './pages/LoginPageNew';
import HomePage from './pages/HomePage';
import BuyNow from './pages/BuyNow';
import '../src/pages/css/login-style.css'
import { ResponsiveNav } from './component/responsive-nav/ResponsiveNav';
import Footer from './component/Footer';
import Formik from './form-using-yup&formik/Formik';
import AboutUs from './pages/AboutUs';
import Filtered from './pages/Filtered';
import Error from './pages/Error';
import Products from './pages/Products';
import ScrollToTop from './component/smoothScroll';
import Cart from './pages/new-cart/Cart';
import PaymentPage from './pages/PaymentPage';
import PaymentSuccess from './pages/PaymentSuccess';
import Pagination from './component/Pagination'

function App() {
  const [showNav, setShowNav] = useState(true)

  const memoizedSetShowNav = useCallback((value) => {
    setShowNav(value);
  }, []);

  return (

    <div className='app-layout'>
      {showNav ? <ResponsiveNav setShowNav={memoizedSetShowNav} /> : <></>}
      <main className='app-content'>
        <ScrollToTop />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/products' element={<Products setShowNav={setShowNav} />} />
          <Route path='/loginNew' element={<LoginPageNew setShowNav={setShowNav} />} />
          <Route path='/perProduct/:id' element={<PerProduct />} />
          <Route path='/buyNow' element={<BuyNow />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact-form' element={<Formik />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/filtered' element={<Filtered />} />
          <Route path='*' element={<Error />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
          <Route path='/pagination' element={<Pagination />} />
        </Routes>
      </main>
      {showNav ? <Footer setShowNav={setShowNav} /> : <></>}

    </div>

  );
}

export default App;
