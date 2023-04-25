/* eslint-disable max-len */
import style from './Main.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../../../assets/svg/applicationLogo.svg';
import Auth from './Auth';
import AccountInfo from './AccountInfo';
import Transactions from './Transactions';
import CurrencyExchange from './CurrencyExchange';

export const Main = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('bearer');
  const userData = useSelector((state) => state.userToken);

  useEffect(() => {
    !!token && token !== 'undefined' ?
      navigate('/application/accounts') :
      navigate('/application/auth');
  }, [userData.token]);

  return (
    <main>
      <div className={style.mainWrapper}>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/accounts' element={<AccountInfo />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/exchange' element={<CurrencyExchange />} />
        </Routes>
        <div className={style.footer}>
          <div className={style.copyrightsWrapper}>
            <a href='/'>
              <LogoSvg className={style.logo} />
            </a>
            <p className={style.copyrightsMark}>© C-Money, 2022</p>
          </div>
        </div>
      </div>
    </main>
  );
};
