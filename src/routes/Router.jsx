import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import { useUserContext } from '../hooks/useUserContext';

export default function Router() {
  const { user } = useUserContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate replace={true} to="/" />}
        />

        {/* <Route
          path="/cart"
          element={user ? <CartPage /> : <Navigate replace={true} to="/login" />}
        /> */}

        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate replace={true} to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
