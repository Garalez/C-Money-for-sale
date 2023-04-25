/* eslint-disable max-len */
import style from './Header.module.scss';
import { ReactComponent as LogoSvg } from '../../../../assets/svg/violetLogo.svg';
import Navigation from './Navigation';

export const Header = () => {
  const isUserLoggedIn = JSON.parse(localStorage.getItem('isUserLoggedIn'));
  console.log('isUserLoggedIn: ', isUserLoggedIn);

  return (
    <header>
      <div className={style.headerWrapper}>
        <div className={style.contentWrapper}>
          <a href='/' className={style.logoLink}>
            <LogoSvg className={style.logo} /> 7-Monet
          </a>
          {isUserLoggedIn ? <Navigation /> : <></>}
        </div>
      </div>
    </header>
  );
};
