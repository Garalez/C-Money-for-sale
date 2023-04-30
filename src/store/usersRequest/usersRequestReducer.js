import {
  USERS_REQUEST,
  USERS_REQUEST_SUCCESS,
  USERS_REQUEST_ERROR,
} from './usersRequestActions.js';

const initialState = {
  status: '',
  accounts: [],
  error: '',
};

export const usersRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case USERS_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        accounts: action.data,
        error: '',
      };
    case USERS_REQUEST_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
