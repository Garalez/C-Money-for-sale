/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';
import { userAccountsReducer } from './accountsRequest/accountsRequestReducer';
import { userAccountInfoReducer } from './accountInfoRequest/accountInfoRequestReducer';
import { userDataReducer } from './userDataRequest/userDataReducer';

export const store = configureStore({
  reducer: {
    usersAccounts: userAccountsReducer,
    userAccountInfo: userAccountInfoReducer,
    userData: userDataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
