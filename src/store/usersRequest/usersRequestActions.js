import { URL_API } from '../../utils/api';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_REQUEST_SUCCESS = 'USERS_REQUEST_SUCCESS';
export const USERS_REQUEST_ERROR = 'USERS_REQUEST_ERROR';

export const usersRequest = () => ({
  type: USERS_REQUEST,
});

export const usersRequestSuccess = (data) => ({
  type: USERS_REQUEST_SUCCESS,
  data,
});

export const usersRequestError = (error) => ({
  type: USERS_REQUEST_ERROR,
  error,
});

export const usersRequestAsync = () => (dispatch) => {
  dispatch(usersRequest());

  fetch(`${URL_API}/user`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(usersRequestSuccess(data));
    })
    .catch((error) => dispatch(usersRequestError(error)));
};
