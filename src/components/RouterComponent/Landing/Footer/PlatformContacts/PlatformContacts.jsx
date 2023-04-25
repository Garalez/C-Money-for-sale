/* eslint-disable max-len */
import style from './PlatformContacts.module.scss';
import { ReactComponent as TelegramLogoSvg } from '../../../../../assets/svg/telegramSocial.svg';
import { ReactComponent as TwitterLogoSvg } from '../../../../../assets/svg/twitterSocial.svg';

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
    <ul className={style.contactsSocialList}>
      <li className={style.contactsSocialItem}>
        <a
          href='https://desktop.telegram.org/'
          aria-label='Ссылка на наш телеграм'
        >
          <TelegramLogoSvg className={style.contactsSocial} />
        </a>
      </li>
      <li className={style.contactsSocialItem}>
        <a
          href='https://twitter.com/?lang=ru'
          aria-label='Ссылка на наш твитер'
        >
          <TwitterLogoSvg className={style.contactsSocial} />
        </a>
      </li>
    </ul>
  </div>
);
