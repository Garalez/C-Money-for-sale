import style from './Footer.module.scss';
import PlatformContacts from './PlatformContacts';
import PlatformLinks from './PlatformLinks';
import PlatformCopyrights from './PlatformCopyrights';
import PlatformOnMap from './PlatformOnMap';

export const Footer = () => (
  <footer className={style.footer}>
    <div className={style.footerWrapper}>
      <div className={style.footerInfo}>
        <div className={style.footerListsWrapper}>
          <div className={style.footerLinksWrapper}>
            <PlatformCopyrights />
            <PlatformLinks />
          </div>
          <PlatformContacts />
        </div>
        <PlatformOnMap />
      </div>
      <div className={style.copyrights}>
        <p className={style.copyrightText}>
          Генеральная лицензия Банка России профессионального участника рынка
          крипто активов на осуществление брокерской деятельности, №
          045-02894-100000 от 11.08.2022 г.
        </p>
      </div>
    </div>
  </footer>
);
