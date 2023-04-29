import { URL_API } from '../../utils/api';

export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_REQUEST_SUCCESS = 'USER_DATA_REQUEST_SUCCESS';
export const USER_DATA_REQUEST_ERROR = 'USER_DATA_REQUEST_ERROR';

export const userDataRequest = () => ({
  type: USER_DATA_REQUEST,
});

export const userDataRequestSuccess = (data) => ({
  type: USER_DATA_REQUEST_SUCCESS,
  data,
});

export const userDataRequestError = (error) => ({
  type: USER_DATA_REQUEST_ERROR,
  error,
});

export const userDataRequestAsync = (login, password) => (dispatch) => {
  dispatch(userDataRequest());

  fetch(`${URL_API}/user`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      data.map((user) => {
        if (user.login === login && user.password === password) {
          dispatch(userDataRequestSuccess(user));
          localStorage.setItem('userID', user.id);
        } else {
          dispatch(userDataRequestError('Usuário ou senha inválidos'));
        }
      });
    })
    .catch((error) => dispatch(userDataRequestError(error)));
};
