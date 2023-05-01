/* eslint-disable max-len */
import { URL_API } from '../../utils/api';

export const USER_INFO_UPDATE_REQUEST = 'USER_INFO_UPDATE_REQUEST';
export const USER_INFO_UPDATE_REQUEST_SUCCESS = 'USER_INFO_UPDATE_REQUEST_SUCCESS';
export const USER_INFO_UPDATE_REQUEST_ERROR = 'USER_INFO_UPDATE_REQUEST_ERROR';

export const userInfoUpdateRequest = () => ({
  type: USER_INFO_UPDATE_REQUEST,
});

export const userInfoUpdateRequestSuccess = () => ({
  type: USER_INFO_UPDATE_REQUEST_SUCCESS,
});

export const userInfoUpdateRequestError = (error) => ({
  type: USER_INFO_UPDATE_REQUEST_ERROR,
  error,
});

export const userInfoUpdateRequestAsync = ({ id, rub, bit, transactions }) => (dispatch) => {
  dispatch(userInfoUpdateRequest());

  fetch(`${URL_API}/user/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      rub,
      bit,
      transactions,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch(userInfoUpdateRequestSuccess());
    })
    .catch((error) => dispatch(userInfoUpdateRequestError(error)));
};
