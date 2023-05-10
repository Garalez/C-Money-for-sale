/* eslint-disable max-len */
import style from './Main.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../../../assets/svg/violetLogo.svg';
import UserTransactionsInfo from './AdminPanel/UserTransactionsInfo';
import Auth from './Auth';
import Payments from './Payments';
import AccountInfo from './AccountInfo';
import AdminPanel from './AdminPanel';
import WithdrawPanel from './WithdrawPanel';

export const Main = () => {
  const userData = useSelector((state) => state.userAccountInfo);
  const isUserLoggedIn = localStorage.getItem('userID');
  const navigate = useNavigate();
  const params = useParams();
  const qwe = Object.keys(params);

  useEffect(() => {
    if (!isUserLoggedIn) navigate('/application/auth');
    if (isUserLoggedIn && isUserLoggedIn === '00001' && params[qwe[0]][0] !== 'u') {
      navigate('/application/adminPanel');
    }
    if (isUserLoggedIn && isUserLoggedIn !== '00001') {
      navigate('/application/accounts');
    }
  }, [userData.status]);

  return (
    <main>
      <div className={style.mainWrapper}>
        <div className={style.routeWrapper}>
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='/accounts' element={<AccountInfo />} />
            <Route path='/payments' element={<Payments />} />
            <Route path='/adminPanel' element={<AdminPanel />} />
            <Route path='/userInfo/:id' element={<UserTransactionsInfo />} />
            <Route
              path='/withdraw'
              element={<WithdrawPanel userData={userData.accountInfo} />}
            />
          </Routes>
        </div>
        <div className={style.footer}>
          <div className={style.copyrightsWrapper}>
            <a href='/' className={style.logoLink}>
              <LogoSvg className={style.logo} />
              <span className={style.logoName}>7-Monet</span>
            </a>
            <p className={style.copyrightsMark}>© 7 Monet, 2023</p>
          </div>
        </div>
      </div>
    </main>
  );
};
