import { useNavigate } from 'react-router-dom';
import style from './Menu.module.scss';

export const Menu = () => {
  const navigate = useNavigate();

  return (
    <nav className={style.navigate}>
      <ul className={style.list}>
        <li className={style.item}>
          <a className={style.link} href='#profit'>
            Почему с нами выгодно?
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href='#registration'>
            Регистрация
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href='#reviews'>
            Отзывы
          </a>
        </li>
        <li className={style.item}>
          <div className={style.link} onClick={() => navigate('/application')}>
            Личный кабинет
          </div>
        </li>
      </ul>
    </nav>
  );
};
