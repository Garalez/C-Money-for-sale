import {
  USER_DATA_REQUEST,
  USER_DATA_REQUEST_SUCCESS,
  USER_DATA_REQUEST_ERROR,
} from './userDataActions.js';

const initialState = {
  status: '',
  error: '',
};

export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case USER_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        error: '',
      };
    case USER_DATA_REQUEST_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
