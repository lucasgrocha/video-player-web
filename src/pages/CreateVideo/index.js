import React from 'react';

import { Form, Button } from 'react-bootstrap';

import './styles.css';

function CreateVideo() {
  function handleCreateVideoSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <div className="container">
      <div id="create-form-wrapper">
        <Form onSubmit={handleCreateVideoSubmit}>
          <Form.Group>
            <Form.Label htmlFor="name">Video name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter the video name"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="description">Video Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Write the video description"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.File
              accept="video/mp4,video/x-m4v,video/*"
              label="Select the video file"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ width: '100%' }}>
            Upload!
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateVideo;
