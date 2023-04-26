/* eslint-disable max-len */
import style from './PlatformCopyrights.module.scss';
import { ReactComponent as PlatformLogoSvg } from '../../../../../assets/svg/whiteLogo.svg';
import { useNavigate } from 'react-router-dom';

export const PlatformCopyrights = () => {
  const navigate = useNavigate();

  return (
    <div className={style.copyrightsLogoWrapper}>
      <div
        onClick={() => navigate('/application')}
        aria-label='Логотип и переход к приложению'
        className={style.platformLogo}
      >
        <PlatformLogoSvg /> 7-Monet
      </div>
    </div>
  );
};
