import { URL_API } from '../../utils/api';
import { sortArrayByDate } from '../../utils/sortArrayByDate';

export const USER_ACCOUNTS_REQUEST = 'USER_ACCOUNTS_REQUEST';
export const USER_ACCOUNTS_REQUEST_SUCCESS = 'USER_ACCOUNTS_REQUEST_SUCCESS';
export const USER_ACCOUNTS_REQUEST_ERROR = 'USER_ACCOUNTS_REQUEST_ERROR';

export const userAccountsRequest = () => ({
  type: USER_ACCOUNTS_REQUEST,
});

export const userAccountsRequestSuccess = (data) => ({
  type: USER_ACCOUNTS_REQUEST_SUCCESS,
  data,
});

export const userAccountsRequestError = (error) => ({
  type: USER_ACCOUNTS_REQUEST_ERROR,
  error,
});

export const userAccountsRequestAsync = () => (dispatch) => {
  const token = localStorage.getItem('bearer');

  if (!token && token === 'undefined') return;

  dispatch(userAccountsRequest());

  fetch(`${URL_API}/accounts`, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(
        userAccountsRequestSuccess(sortArrayByDate(data.payload))
      );
    })
    .catch((error) => dispatch(userAccountsRequestError(error)));
};
