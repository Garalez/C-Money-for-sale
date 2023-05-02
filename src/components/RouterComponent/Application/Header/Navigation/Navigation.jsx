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
      <div className={style.navItem}>
        <button
          className={style.navItemButton}
          onClick={() => handleLeaveAccount()}
        >
          <span className={style.exitText}>Выйти</span>
          <ExitSvg className={style.navItemExitImg} />
        </button>
      </div>
    </nav>
  );
};
