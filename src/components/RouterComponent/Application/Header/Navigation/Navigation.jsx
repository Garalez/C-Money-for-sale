/* eslint-disable max-len */
import style from './Navigation.module.scss';
import { ReactComponent as ExitSvg } from '../../../../../assets/svg/exitSvg.svg';

export const Navigation = () => {
  const handleLeaveAccount = () => {
    localStorage.removeItem('userID');
    location.reload();
  };

  return (
    <nav className={style.navigation}>
      <ul className={style.navList}>
        {/* <li className={style.navItem}>
          <button
            className={style.navItemButton}
            onClick={() => navigate('/application/accounts')}
          >
            Счета
          </button>
        </li>
        <li className={style.navItem}>
          <button
            className={style.navItemButton}
            onClick={() => navigate('/application/exchange')}
          >
            Обмен
          </button>
        </li> */}
        <li className={style.navItem}>
          <button
            className={style.navItemButton}
            onClick={() => handleLeaveAccount()}
          >
            Выйти <ExitSvg className={style.navItemExitImg} />
          </button>
        </li>
      </ul>
    </nav>
  );
};
