import api from './api';

const videosService = {
  index: () => api.get('/videos'),
  show: (id) => api.get(`/videos/${id}`),
  recommended_videos: () => api.get('/recommended_videos'),
  create: (data) => {
    const token = sessionStorage.getItem('user_token');

    return api.post('/videos', data, {
      headers: {
        Authorization: token,
      },
    });
  },
  incrementView: (id) =>
    api.put('incrementView', {
      id,
    }),

  users: () => {
    const token = sessionStorage.getItem('user_token');
    const headers = { Authorization: token };

    return {
      myVideos: () => {
        return api.get('/myVideos', {
          headers,
        });
      },
      destroy: (id) => {
        return api.delete(`/videos/${id}`, {
          headers,
        });
      },
      edit: (id) => {
        return api.get(`/videos/${id}/edit`, {
          headers,
        });
      },
      update: (id, data) => {
        return api.put(`/videos/${id}`, data, {
          headers,
        });
      },
    };
  },
};

export default videosService;
