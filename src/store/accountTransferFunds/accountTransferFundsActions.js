/* eslint-disable max-len */
import { URL_API } from '../../utils/api';

export const ACCOUNT_TRANSFER_FUNDS = 'ACCOUNT_TRANSFER_FUNDS';
export const ACCOUNT_TRANSFER_FUNDS_SUCCESS = 'ACCOUNT_TRANSFER_FUNDS_SUCCESS';
export const ACCOUNT_TRANSFER_FUNDS_ERROR = 'ACCOUNT_TRANSFER_FUNDS_ERROR';

export const accountTransferFundsRequest = () => ({
  type: ACCOUNT_TRANSFER_FUNDS,
});

export const accountTransferFundsRequestSuccess = (data) => ({
  type: ACCOUNT_TRANSFER_FUNDS_SUCCESS,
  data,
});

export const accountTransferFundsRequestError = (error) => ({
  type: ACCOUNT_TRANSFER_FUNDS_ERROR,
  error,
});

export const accountTransferFundsRequestAsync =
  ({ from, to, amount }) =>
    (dispatch) => {
      const token = localStorage.getItem('bearer');

      if (!token || token === 'undefined') return;

      dispatch(accountTransferFundsRequest());

      const transferData = {
        from,
        to,
        amount,
      };

      fetch(`${URL_API}/transfer-funds`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transferData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.payload) {
            dispatch(accountTransferFundsRequestSuccess(data.payload));
          } else {
            dispatch(accountTransferFundsRequestError(data.error));
          }
        })
        .catch((error) => dispatch(accountTransferFundsRequestError(error)));
    };
