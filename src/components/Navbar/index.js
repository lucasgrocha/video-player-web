import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function Navbar() {
  // eslint-disable-next-line
  const loggedIn = document.cookie.split('=')[1] == false;

  return (
    <div id="navbar">
      <div id="logo">
        <Link to="/">Video Player</Link>
      </div>

      <div id="user-area">
        {loggedIn ? (
          <a href="/users/sign_in">Fazer Login</a>
        ) : (
          <a href="/users/sign_out">Fazer Logout</a>
        )}
      </div>
    </div>
  );
}

export default Navbar;
