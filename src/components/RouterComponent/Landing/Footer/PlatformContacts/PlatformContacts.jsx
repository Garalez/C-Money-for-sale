/* eslint-disable max-len */
import style from './PlatformContacts.module.scss';

export const PlatformContacts = () => (
  <div className={style.contactsWrapper}>
    <ul className={style.contactsList}>
      <li className={style.contactsItem}>Контакты:</li>
      <li className={style.contactsItem}>Россия</li>
      <li className={style.contactsItem}>
        <span>г. Москва </span>
        <span className={style.contactsStreet}>Одесская улица</span> 10
      </li>
      <li className={style.contactsItem}>+74954773359</li>
    </ul>
  </div>
);
