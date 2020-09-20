import React, { useEffect } from 'react';

import './styles.css';

function MyVideos() {
  useEffect(() => {
    console.log(123);
  }, []);

  return (
    <div className="container">
      <h1>123</h1>
    </div>
  );
}

export default MyVideos;
