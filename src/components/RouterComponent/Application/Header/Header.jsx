/* eslint-disable max-len */
import style from './Header.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as LogoSvg } from '../../../../assets/svg/applicationLogo.svg';
import Navigation from './Navigation';

export const Header = () => {
  let token = localStorage.getItem('bearer');
  const stateToken = useSelector(state => state.userToken);

  useEffect(() => {
    token = localStorage.getItem('bearer');
  }, [stateToken]);

  return (
    <header>
      <div className={style.headerWrapper}>
        <div className={style.contentWrapper}>
          <a href='/'>
            <LogoSvg className={style.logo} />
          </a>
          {!!token & token !== 'undefined' ? <Navigation /> : <></>}
        </div>
      </div>
    </header>
  );
};
