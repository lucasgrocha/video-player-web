import React, { useState, useEffect } from 'react';

import { Form, Button } from 'react-bootstrap';
import videosService from '../../services/videosService';

import './styles.css';

function CreateVideo() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Create video';
  }, []);

  function handleCreateVideoSubmit(evt) {
    evt.preventDefault();

    setLoading(true);
    const data = new FormData();

    data.append('video[name]', name);
    data.append('video[description]', description);
    data.append('video[file]', selectedFile);

    videosService.create(data).then((res) => {
      if (res.status === 201) {
        alert('Uploaded, please go to the home to see your video');
        setDescription('');
        setName('');
        setLoading(false);
      }
    });
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
              onChange={(evt) => setName(evt.target.value)}
              value={name}
              placeholder="Enter the video name"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="description">Video Description</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(evt) => setDescription(evt.target.value)}
              rows="3"
              value={description}
              placeholder="Write the video description"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.File
              accept="video/mp4,video/x-m4v,video/*"
              label="Select the video file"
              required
              onChange={(evt) => setSelectedFile(evt.target.files[0])}
            />
          </Form.Group>

          <Button
            disabled={loading}
            variant="primary"
            type="submit"
            style={{ width: '100%' }}
          >
            Upload video
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateVideo;
