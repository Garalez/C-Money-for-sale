import { URL_API } from './api';

export const updateUserInfo = ({ id, rub, bit, lastTransaction }) => {
  fetch(`${URL_API}/user/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      rub,
      bit,
      lastTransaction,
    }),
  });
};
