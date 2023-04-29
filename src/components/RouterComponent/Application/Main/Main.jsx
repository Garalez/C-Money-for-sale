/* eslint-disable max-len */
import style from './Main.module.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../../../assets/svg/violetLogo.svg';
import Auth from './Auth';
import AccountInfo from './AccountInfo';
import { useEffect } from 'react';
// import CurrencyExchange from './CurrencyExchange';

export const Main = () => {
  const isUserLoggedIn = localStorage.getItem('userID');
  const navigate = useNavigate();

  useEffect(() => {
    isUserLoggedIn ? navigate('/application/accounts') : navigate('/application/auth');
  }, []);

  return (
    <main>
      <div className={style.mainWrapper}>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/accounts' element={<AccountInfo />} />
          {/* <Route path='/exchange' element={<CurrencyExchange />} /> */}
        </Routes>
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
