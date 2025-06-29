import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import AboutPage from './landingPage/about/AboutPage';
import SignUp from './landingPage/signup/SignUp';
import SupportPage from './landingPage/support/SupportPage';
import PricingPage from './landingPage/pricing/PricingPage';
import ProductPage from './landingPage/products/ProductPage';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import NotFound from './landingPage/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/signup' element={<SignUp />}/>
    <Route path='/about' element={<AboutPage />}/>
    <Route path='/product' element={<ProductPage />}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/support' element={<SupportPage />}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);
