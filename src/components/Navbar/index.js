import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function Navbar() {
  const loggedIn = !sessionStorage.getItem('user_token');

  function signOut() {
    sessionStorage.removeItem('user_token');
  }

  return (
    <div id="navbar">
      <div id="logo">
        <Link to="/">Video Player</Link>
      </div>

      <div id="user-area">
        {loggedIn ? (
          <Link to="/login">Fazer Login</Link>
        ) : (
          <>
            <Link to="/myVideos">My Videos</Link>
            <span style={{ color: 'white', margin: '0 1rem' }}>|</span>
            <Link to="/createVideo">Upload a video</Link>
            <span style={{ color: 'white', margin: '0 1rem' }}>|</span>
            <a href="/" onClick={signOut}>
              Fazer Logout
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
