import {
  USER_INFO_UPDATE_REQUEST,
  USER_INFO_UPDATE_REQUEST_SUCCESS,
  USER_INFO_UPDATE_REQUEST_ERROR,
} from './userInfoUpdateRequestActions.js';

const initialState = {
  status: '',
  error: '',
};

export const userInfoUpdateRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO_UPDATE_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case USER_INFO_UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        error: '',
      };
    case USER_INFO_UPDATE_REQUEST_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
