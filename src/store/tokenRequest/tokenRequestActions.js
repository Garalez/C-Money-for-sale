import { URL_API } from '../../utils/api';

export const USER_TOKEN_REQUEST = 'USER_TOKEN_REQUEST';
export const USER_TOKEN_REQUEST_SUCCESS = 'USER_TOKEN_REQUEST_SUCCESS';
export const USER_TOKEN_REQUEST_ERROR = 'USER_TOKEN_REQUEST_ERROR';

export const userTokenRequest = () => ({
  type: USER_TOKEN_REQUEST,
});

export const userTokenRequestSuccess = (data) => ({
  type: USER_TOKEN_REQUEST_SUCCESS,
  data,
});

export const userTokenRequestError = (error) => ({
  type: USER_TOKEN_REQUEST_ERROR,
  error,
});

export const userTokenRequestAsync = (userName, userPassword) => (dispatch) => {
  const token = localStorage.getItem('bearer');
  if (token && token !== 'undefined') return;
  dispatch(userTokenRequest());

  fetch(`${URL_API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: userName,
      password: userPassword,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(userTokenRequestSuccess(data.payload.token));
      localStorage.setItem('bearer', data.payload.token);
    })
    .catch((error) => dispatch(userTokenRequestError(error)));
};
