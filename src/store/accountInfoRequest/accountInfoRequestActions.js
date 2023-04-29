/* eslint-disable max-len */
import { URL_API } from '../../utils/api';

export const USER_ACCOUNT_INFO_REQUEST = 'USER_ACCOUNT_INFO_REQUEST';
export const USER_ACCOUNT_INFO_REQUEST_SUCCESS = 'USER_ACCOUNT_INFO_REQUEST_SUCCESS';
export const USER_ACCOUNT_INFO_REQUEST_ERROR = 'USER_ACCOUNT_INFO_REQUEST_ERROR';

export const userAccountInfoRequest = () => ({
  type: USER_ACCOUNT_INFO_REQUEST,
});

export const userAccountInfoRequestSuccess = (data) => ({
  type: USER_ACCOUNT_INFO_REQUEST_SUCCESS,
  data,
});

export const userAccountInfoRequestError = (error) => ({
  type: USER_ACCOUNT_INFO_REQUEST_ERROR,
  error,
});

export const userAccountInfoRequestAsync = (id) => (dispatch) => {
  dispatch(userAccountInfoRequest());

  fetch(`${URL_API}/user/${id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(userAccountInfoRequestSuccess(data));
    })
    .catch((error) => dispatch(userAccountInfoRequestError(error)));
};
