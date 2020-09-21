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
        return api.delete(`/video/${id}`, {
          headers,
        });
      },
      edit: (id) => {
        return api.get(`/video/${id}/edit`, {
          headers,
        });
      },
      update: (id, data) => {
        return api.put(`/video/${id}`, data, {
          headers,
        });
      },
    };
  },
};

export default videosService;
