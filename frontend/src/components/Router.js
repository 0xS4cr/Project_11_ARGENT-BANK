import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './footer/Footer';
import Home from '../pages/Home';
import User from '../pages/User';
import SignInPage from '../pages/SignIn';
import ErrorPage from '../pages/ErrorPage';

export default function Routers() {
  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/user/:userName" element={<User />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  };

  return <BrowserRoutes />;
}
