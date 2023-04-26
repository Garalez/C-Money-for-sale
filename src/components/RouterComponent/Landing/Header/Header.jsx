/* eslint-disable max-len */
import style from './Header.module.scss';
import { ReactComponent as LogoSvg } from '../../../../assets/svg/violetLogo.svg';
import useWindowDimensions from '../../../../hooks/screenViewPort';
import BurgerMenu from './BurgerMenu';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  return (
    <header>
      <div className={style.header}>
        <div className={style.headerWrapper}>
          <div
            onClick={() => navigate('/application/auth')}
            className={style.logoWrapper}
          >
            <LogoSvg className={style.logo} /> 7-Monet
          </div>
          {width <= 768 ? <BurgerMenu /> : <Menu />}
        </div>
      </div>
    </header>
  );
};
