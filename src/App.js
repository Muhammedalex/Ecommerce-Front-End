import React from 'react';
import './App.css';
import {BrowserRouter , Route,Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProd from './pages/CompareProd';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPass from './pages/ForgotPass';
import Signup from './pages/Signup';
import ResetPass from './pages/ResetPass';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolic from './pages/PrivacyPolic';
import RefundPolic from './pages/RefundPolic';
import ShippingPolic from './pages/ShippingPolic';
import TermAndCond from './pages/TermAndCond';
import SingleProd from './pages/SingleProd';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='our-store' element={<OurStore />} />
            <Route path='product/:id' element={<SingleProd />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='blog/:id' element={<SingleBlog />} />
            <Route path='cart' element={<Cart />} />
            <Route path='check-out' element={<CheckOut />} />
            <Route path='compare-products' element={<CompareProd />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPass />} />
            <Route path='reset-password' element={<ResetPass />} />
            <Route path='signup' element={<Signup />} />
            <Route path='privacy-policy' element={<PrivacyPolic />} />
            <Route path='refund-policy' element={<RefundPolic />} />
            <Route path='shipping-policy' element={<ShippingPolic />} />
            <Route path='term-and-conditions' element={<TermAndCond />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
