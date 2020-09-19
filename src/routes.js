import React from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import VideoShow from './pages/VideoShow';
import Login from './pages/Login';

function AppRoutes() {
  const loggedIn = !sessionStorage.getItem('user_token');

  const PrivateRoute = ({ redirectTo, isAuth, path }) => {
    if (!isAuth) {
      return <Navigate to={redirectTo} />;
    }
    return <Route path={path} element={<Login />} />;
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:id" element={<VideoShow />} />
        <PrivateRoute isAuth={loggedIn} path="/login" redirectTo="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
