import React, { useState, useEffect } from 'react';

import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import videosService from '../../services/videosService';

import '../CreateVideo/styles.css';

function EditVideo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    videosService
      .users()
      .edit(id)
      .then((res) => {
        const data = res.data;

        setName(data.name);
        setDescription(data.description);
      })
      .catch(() => {
        navigate('/myVideos');
      });
  }, [id, navigate]);

  function handleEditVideoSubmit(evt) {
    evt.preventDefault();

    setLoading(true);
    const data = {
      video: {
        name,
        description,
      },
    };

    videosService
      .users()
      .update(id, data)
      .then((res) => {
        if (res.status === 200) {
          navigate('/myVideos');
        }
      });
  }

  return (
    <div className="container">
      <div id="create-form-wrapper">
        <Form onSubmit={handleEditVideoSubmit}>
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

          <Button
            disabled={loading}
            variant="primary"
            type="submit"
            style={{ width: '100%' }}
          >
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EditVideo;
