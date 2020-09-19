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
          <a href="/" onClick={signOut}>
            Fazer Logout
          </a>
        )}
      </div>
    </div>
  );
}

export default Navbar;
