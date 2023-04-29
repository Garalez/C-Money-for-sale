/* eslint-disable max-len */
// import { userAccountsRequestAsync } from '../../../../../store/accountsRequest/accountsRequestActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAccountInfoRequestAsync } from '../../../../../store/accountInfoRequest/accountInfoRequestActions';
import { Preloader } from '../../../../../UI/Preloader/Preloader';
import style from './AccountInfo.module.scss';
import MyAccounts from './MyAccounts';

export const AccountInfo = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userID');
  const userData = useSelector((state) => state.userAccountInfo);

  useEffect(() => {
    if (userId) {
      dispatch(userAccountInfoRequestAsync(userId));
    }
  }, []);

  return userData.status !== 'loaded' ? (
    <Preloader color={'white'} />
  ) : (
    <section className={style.account}>
      <div className={style.accountWrapper}>
        <div className={style.accountTitleWrapper}>
          <h1 className={style.accountTitle}>Здравствуйте, {userData.accountInfo.name}!</h1>
          <a
            href='https://my.qiwi.com/Tatiana-BDWWHiMYMA'
            target='_blank'
            rel='noreferrer'
            className={style.accountBtn}
          >
            Пополнить счёт
          </a>
        </div>
        <div className={style.accountInfoWrapper}>
          <p className={style.accountSubtitle}>Мои счета</p>
        </div>
        <ul className={style.accountList}>
          <MyAccounts account={userData.accountInfo} />
        </ul>
      </div>
    </section>
  );
};
