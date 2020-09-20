import api from './api';

const registrationsService = {
  create: (email, password, password_confirmation, name) =>
    api.post('/registrations', {
      user: {
        email,
        password,
        password_confirmation,
        name,
      },
    }),
};

export default registrationsService;
