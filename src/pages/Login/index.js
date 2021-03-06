import React, { useEffect, useRef } from 'react';

import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import sessionsService from '../../services/sessionsService';
import './styles.css';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    document.title = 'Sign in';
  }, []);

  const handleLogin = (evt) => {
    evt.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email + password === '') {
      return null;
    }

    sessionsService.auth(email, password).then((res) => {
      if (res.status === 200) {
        sessionStorage.setItem('user_token', res.data.token);
        window.location.href = '/';
      }
    });
  };

  return (
    <div id="login-wrapper">
      <Form style={{ width: '30rem' }} onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to="/register">Register new account</Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
