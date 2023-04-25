import {
  USER_TOKEN_REQUEST,
  USER_TOKEN_REQUEST_SUCCESS,
  USER_TOKEN_REQUEST_ERROR,
} from './tokenRequestActions.js';

const initialState = {
  status: '',
  token: '',
  error: '',
};

export const userTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TOKEN_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case USER_TOKEN_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        token: action.data,
        error: '',
      };
    case USER_TOKEN_REQUEST_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
