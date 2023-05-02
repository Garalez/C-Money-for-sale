/* eslint-disable max-len */
import style from './Header.module.scss';
import { ReactComponent as LogoSvg } from '../../../../assets/svg/violetLogo.svg';
import Navigation from './Navigation';

export const Header = () => {
  const isUserLoggedIn = localStorage.getItem('userID');

  return (
    <header>
      <div className={style.headerWrapper}>
        <div className={style.contentWrapper}>
          <a href='/' className={style.logoLink}>
            <LogoSvg className={style.logo} />
            <span className={style.logoName}>7-Monet</span>
          </a>
          {isUserLoggedIn ? <Navigation /> : <></>}
        </div>
      </div>
    </header>
  );
};
