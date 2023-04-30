import { URL_API } from '../../utils/api';

export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_REQUEST_SUCCESS = 'USER_DATA_REQUEST_SUCCESS';
export const USER_DATA_REQUEST_ERROR = 'USER_DATA_REQUEST_ERROR';

export const userDataRequest = () => ({
  type: USER_DATA_REQUEST,
});

export const userDataRequestSuccess = () => ({
  type: USER_DATA_REQUEST_SUCCESS,
});

export const userDataRequestError = (error) => ({
  type: USER_DATA_REQUEST_ERROR,
  error,
});

export const userDataRequestAsync = (login, password) => (dispatch) => {
  dispatch(userDataRequest());

  fetch(`${URL_API}/login/${login}-${password}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((userId) => {
      dispatch(userDataRequestSuccess());
      localStorage.setItem('userID', userId);
    })
    .catch((error) => dispatch(userDataRequestError(error)));
};
