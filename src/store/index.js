/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';
import { userTokenReducer } from './tokenRequest/tokenRequestReducer';
import { userAccountsReducer } from './accountsRequest/accountsRequestReducer';
import { userAccountInfoReducer } from './accountInfoRequest/accountInfoRequestReducer';
import { accountTransferFundsReducer } from './accountTransferFunds/accountTransferFundsReducer';
import { currencyTypeRequestReducer } from './currencyTypeRequest/currencyTypeRequestReducer';
import { currencyRequestReducer } from './currencyRequest/currencyRequestReducer';
import { currencyBuyReducer } from './buyCurrency/buyCurrencyReducer';

export const store = configureStore({
  reducer: {
    userToken: userTokenReducer,
    userAccounts: userAccountsReducer,
    userAccountInfo: userAccountInfoReducer,
    accountTransferFunds: accountTransferFundsReducer,
    currencyTypes: currencyTypeRequestReducer,
    userCurrencies: currencyRequestReducer,
    currencyBuy: currencyBuyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});
