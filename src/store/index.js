/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';
import { userAccountsReducer } from './accountsRequest/accountsRequestReducer';
import { userAccountInfoReducer } from './accountInfoRequest/accountInfoRequestReducer';
import { usersRequestReducer } from './usersRequest/usersRequestReducer';
import { userDataReducer } from './userDataRequest/userDataReducer';

export const store = configureStore({
  reducer: {
    usersAccounts: userAccountsReducer,
    userAccountInfo: userAccountInfoReducer,
    userData: userDataReducer,
    users: usersRequestReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
