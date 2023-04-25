import {
  USER_ACCOUNTS_REQUEST,
  USER_ACCOUNTS_REQUEST_SUCCESS,
  USER_ACCOUNTS_REQUEST_ERROR,
} from './accountsRequestActions.js';

const initialState = {
  status: '',
  accounts: [],
  error: '',
};

export const userAccountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACCOUNTS_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case USER_ACCOUNTS_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        accounts: action.data,
        error: '',
      };
    case USER_ACCOUNTS_REQUEST_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
