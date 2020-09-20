import api from './api';

const videosService = {
  index: () => api.get('/video'),
  show: (id) => api.get(`/video/${id}`),
  recommended_videos: () => api.get('/recommended_videos'),
  create: (data) => {
    const token = sessionStorage.getItem('user_token');

    return api.post('/video', data, {
      headers: {
        Authorization: token,
      },
    });
  },
};

export default videosService;
