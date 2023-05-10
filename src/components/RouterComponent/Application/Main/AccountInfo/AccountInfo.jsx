/* eslint-disable max-len */
import style from './AccountInfo.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAccountInfoRequestAsync } from '../../../../../store/accountInfoRequest/accountInfoRequestActions';
import { UserInfoTable } from './UserInfoTable/UserInfoTable';
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
    } else {
      navigate('/application/auth');
    }
  }, []);

  return userData.status === 'loading' ? (
    <Preloader color={'white'} />
  ) : (
    <section className={style.account}>
      <div className={style.accountWrapper}>
        <div className={style.accountTitleWrapper}>
          <h1 className={style.accountTitle}>
            <span className={style.accountGreetings}>Здравствуйте, </span>
            <span>{userData.accountInfo.name}!</span>
          </h1>
          <div className={style.btnWrapper}>
            <button
              className={style.accountBtn}
              onClick={() => navigate('/application/payments')}
            >
              Пополнить счет
            </button>
            <button
              className={style.withdrawCashbtn}
              onClick={() => navigate('/application/withdraw')}
            >
              Вывести средства
            </button>
          </div>
        </div>
        {userData.accountInfo.transactions && (
          <div className={style.userInfoGraphic}>
            <MyAccounts account={userData.accountInfo} />
            <UserInfoTable account={userData.accountInfo} />
          </div>
        )}
      </div>
    </section>
  );
};
