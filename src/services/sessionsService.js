import api from './api';

const sessionsService = {
  auth: (email, password) =>
    api.post('/auth', {
      email,
      password,
    }),
};

export default sessionsService;
