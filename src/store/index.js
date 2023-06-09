/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';
import { userInfoUpdateRequestReducer } from './userInfoUpdateRequest/userInfoUpdateRequestReducer';
import { userDeleteRequestReducer } from './userDeleteRequest/userDeleteRequestReducer';
import { userAccountInfoReducer } from './accountInfoRequest/accountInfoRequestReducer';
import { usersRequestReducer } from './usersRequest/usersRequestReducer';
import { userDataReducer } from './userDataRequest/userDataReducer';

export const store = configureStore({
  reducer: {
    userAccountInfo: userAccountInfoReducer,
    userData: userDataReducer,
    users: usersRequestReducer,
    userInfoUpdate: userInfoUpdateRequestReducer,
    userDelete: userDeleteRequestReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
