import React from 'react';

import { Form, Button } from 'react-bootstrap';

import './styles.css';

function Login() {
  const handleLogin = (evt) => {
    evt.preventDefault();
  };

  return (
    <div id="login-wrapper">
      <Form style={{ width: '30rem' }} onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
