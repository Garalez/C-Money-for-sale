/* eslint-disable max-len */
import style from './Main.module.scss';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../../../assets/svg/violetLogo.svg';
import Auth from './Auth';
import AccountInfo from './AccountInfo';
import AdminPanel from './AdminPanel';

export const Main = () => {
  const isUserLoggedIn = localStorage.getItem('userID');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) navigate('/application/auth');
    if (isUserLoggedIn && isUserLoggedIn === '00001') navigate('/application/adminPanel');
    if (isUserLoggedIn && isUserLoggedIn !== '00001') navigate('/application/accounts');
  }, []);

  return (
    <main>
      <div className={style.mainWrapper}>
        <div className={style.routeWrapper}>
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='/accounts' element={<AccountInfo />} />
            <Route path='/adminPanel' element={<AdminPanel />} />
          </Routes>
        </div>
        <div className={style.footer}>
          <div className={style.copyrightsWrapper}>
            <a href='/' className={style.logoLink}>
              <LogoSvg className={style.logo} /> 7-Monet
            </a>
            <p className={style.copyrightsMark}>© 7 Monet, 2023</p>
          </div>
        </div>
      </div>
    </main>
  );
};
