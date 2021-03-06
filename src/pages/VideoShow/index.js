import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

import './styles.css';
import videosService from '../../services/videosService';
import VideoCard from '../../components/VideoCard';

function VideoShow() {
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [recommendedVideos, setRecommendedVideos] = useState();

  useEffect(() => {
    videosService.show(id).then((res) => {
      setVideo(res.data);
    });
  }, [id]);

  useEffect(() => {
    if (!!video) {
      document.title = video.name;
    }
  }, [video]);

  useEffect(() => {
    videosService.recommended_videos().then((res) => {
      setRecommendedVideos(res.data);
    });
  }, [id]);

  useEffect(() => {
    document.querySelector('html').scrollTop = 0;
  }, [id]);

  if (!video || !recommendedVideos) {
    return null;
  }

  async function handleVideoStarted() {
    await videosService.incrementView(video.id);
  }

  return (
    <div className="container">
      <div id="video">
        <div id="video-box">
          <div id="player">
            <ReactPlayer
              url={`${process.env.REACT_APP_API_BASE_URL}${video.file_url}`}
              controls
              playing={true}
              onStart={handleVideoStarted}
            />
          </div>

          <div id="video-infos">
            <h1 style={{ marginTop: '1rem' }}>{video.name}</h1>
            <h2 style={{ textAlign: 'right' }}>{video.views} views</h2>
            <p>
              <strong>Owner:</strong> {video.user_name}
            </p>
            <hr />
            <p id="description">{video.description}</p>
          </div>
        </div>
        <div id="videos-list">
          {recommendedVideos.map((video) => (
            <VideoCard
              id={video.id}
              key={video.id}
              name={video.name}
              thumbnail_url={video.thumbnail_url}
              views={video.views}
              userName={video.user_name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoShow;
