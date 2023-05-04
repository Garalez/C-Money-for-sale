import {
  USER_DELETE_REQUEST,
  USER_DELETE_REQUEST_SUCCESS,
  USER_DELETE_REQUEST_ERROR,
} from './userDeleteRequestActions.js';

const initialState = {
  status: '',
  error: '',
};

export const userDeleteRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case USER_DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        error: '',
      };
    case USER_DELETE_REQUEST_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
