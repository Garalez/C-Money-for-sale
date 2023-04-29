import { URL_API } from './api.js';

export const createUser = ({
  firstName,
  lastName,
  login,
  password,
  email,
  creationDate = new Date(),
  lastTransaction = '',
  rub = 0,
  bit = 0,
}) => {
  fetch(`${URL_API}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: firstName,
      lastName,
      login,
      password,
      email,
      creationDate,
      lastTransaction,
      rub,
      bit,
    }),
  });
};
