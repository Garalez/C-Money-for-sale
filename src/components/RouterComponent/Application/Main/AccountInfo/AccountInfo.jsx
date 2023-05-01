/* eslint-disable max-len */
import style from './AccountInfo.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAccountInfoRequestAsync } from '../../../../../store/accountInfoRequest/accountInfoRequestActions';
import { Preloader } from '../../../../../UI/Preloader/Preloader';
import MyAccounts from './MyAccounts';

export const AccountInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userID');
  const userData = useSelector((state) => state.userAccountInfo);

  useEffect(() => {
    if (userId) {
      dispatch(userAccountInfoRequestAsync(userId));
    }
  }, []);

  return userData.status === 'loading' ? (
    <Preloader color={'white'} />
  ) : (
    <section className={style.account}>
      <div className={style.accountWrapper}>
        <div className={style.accountTitleWrapper}>
          <h1 className={style.accountTitle}>
            <span>Здравствуйте, </span>
            <span>{userData.accountInfo.name}!</span>
          </h1>
          <div className={style.btnWrapper}>
            <a
              href='https://my.qiwi.com/Tatiana-BDWWHiMYMA'
              target='_blank'
              rel='noreferrer'
              className={style.accountBtn}
            >
              Пополнить счёт
            </a>
            <button
              className={style.withdrawCashbtn}
              onClick={() => navigate('/application/withdraw')}
            >
              Вывести средства
            </button>
          </div>
        </div>
        {userData.accountInfo.transactions && <MyAccounts account={userData.accountInfo} />}
      </div>
    </section>
  );
};
