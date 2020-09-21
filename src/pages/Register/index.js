import React, { useEffect, useRef } from 'react';

import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import registrationsService from '../../services/registrationsService';

import './styles.css';

function Register() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    document.title = 'Sign up';
  }, []);

  const handleRegister = (evt) => {
    evt.preventDefault();

    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirmation = passwordConfirmationRef.current.value;

    if (email + password + passwordConfirmation + name === '') {
      return null;
    }

    if (password !== passwordConfirmation) {
      alert('Different passwords, please rewrite');
      return;
    }

    registrationsService
      .create(email, password, passwordConfirmation, name)
      .then((res) => {
        if (res.status === 200) {
          sessionStorage.setItem('user_token', res.data.token);
          window.location.href = '/';
        } else {
          alert('Something went wrong, please check your infos');
        }
      });
  };

  return (
    <div id="register-wrapper">
      <Form style={{ width: '30rem' }} onSubmit={handleRegister}>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            ref={nameRef}
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </Form.Group>

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

        <Form.Group>
          <Form.Label htmlFor="passwordConfirmation">
            Password confirm
          </Form.Label>
          <Form.Control
            ref={passwordConfirmationRef}
            name="passwordConfirmation"
            type="password"
            placeholder="Rewrite the password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to="/login">Already have an account? Sign in</Link>
        </div>
      </Form>
    </div>
  );
}

export default Register;
