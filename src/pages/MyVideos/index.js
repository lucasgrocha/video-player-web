import React, { useEffect, useState } from 'react';

import videosService from '../../services/videosService';
import './styles.css';

function MyVideos() {
  const [videos, setVideos] = useState();

  useEffect(() => {
    videosService.myVideos().then((res) => {
      setVideos(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>123</h1>
    </div>
  );
}

export default MyVideos;
