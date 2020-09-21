import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import videosService from '../../services/videosService';
import Actions from './Actions';
import './styles.css';

function MyVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    videosService
      .users()
      .myVideos()
      .then((res) => {
        setVideos(res.data);
      });
  }, []);

  useEffect(() => {
    document.title = 'My Videos';
  }, []);

  function handleDeleteVideo(id) {
    const confirmed = window.confirm(
      'Do you really want to remove this video?'
    );

    if (!confirmed) {
      return;
    }

    videosService
      .users()
      .destroy(id)
      .then((res) => {
        if (res.status === 204) {
          setVideos((prev) => prev.filter((video) => video.id !== id));
        }
      });
  }

  const table = (
    <Table striped bordered hover responsive>
      <thead className="thead-dark">
        <tr>
          <th>Video</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {videos?.map((video) => (
          <tr key={video.id}>
            <td className="align-middle">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={`${process.env.REACT_APP_API_BASE_URL}/${video.thumbnail_url}`}
                  alt={`${video.name}`}
                  style={{ maxHeight: '10rem' }}
                />
              </div>
            </td>
            <td className="align-middle">{video.name}</td>
            <td className="align-middle">
              <Actions id={video.id} deleteClicked={handleDeleteVideo} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <div id="my-videos-wrapper">
      <div className="container">
        {videos.length > 0 ? table : <h1>You didn't upload a video yet</h1>}
      </div>
    </div>
  );
}

export default MyVideos;
