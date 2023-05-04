import { URL_API } from '../../utils/api';

export const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST';
export const USER_DELETE_REQUEST_SUCCESS = 'USER_DELETE_REQUEST_SUCCESS';
export const USER_DELETE_REQUEST_ERROR = 'USER_DELETE_REQUEST_ERROR';

export const userDeleteRequest = () => ({
  type: USER_DELETE_REQUEST,
});

export const userDeleteRequestSuccess = () => ({
  type: USER_DELETE_REQUEST_SUCCESS,
});

export const userDeleteRequestError = (error) => ({
  type: USER_DELETE_REQUEST_ERROR,
  error,
});

export const userDeleteRequestAsync = (id) => (dispatch) => {
  dispatch(userDeleteRequest());

  fetch(`${URL_API}/user/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(userDeleteRequestSuccess(data));
    })
    .catch((error) => dispatch(userDeleteRequestError(error)));
};
