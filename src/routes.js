import React from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import VideoShow from './pages/VideoShow';
import Login from './pages/Login';
import CreateVideo from './pages/CreateVideo';
import EditVideo from './pages/EditVideo';
import MyVideos from './pages/MyVideos';
import Register from './pages/Register';

function AppRoutes() {
  const loggedIn = !sessionStorage.getItem('user_token');

  const PrivateRoute = ({ redirectTo, isAuth, path, component }) => {
    if (!isAuth) {
      return <Navigate to={redirectTo} />;
    }
    return <Route path={path} element={component} />;
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:id" element={<VideoShow />} />
        <PrivateRoute
          isAuth={loggedIn}
          path="/login"
          component={<Login />}
          redirectTo="/"
        />
        <PrivateRoute
          isAuth={loggedIn}
          path="/register"
          component={<Register />}
          redirectTo="/"
        />
        <PrivateRoute
          isAuth={!loggedIn}
          path="/createVideo"
          component={<CreateVideo />}
          redirectTo="/"
        />
        <PrivateRoute
          isAuth={!loggedIn}
          path="/editVideo/:id"
          component={<EditVideo />}
          redirectTo="/"
        />
        <PrivateRoute
          isAuth={!loggedIn}
          path="/myVideos"
          component={<MyVideos />}
          redirectTo="/"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
