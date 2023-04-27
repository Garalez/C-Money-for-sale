/* eslint-disable max-len */
import style from './RegistrationSuccess.module.scss';
import { ReactComponent as Check } from '../../../../../../assets/svg/registrationSuccessCheckmark.svg';

export const RegistrationSuccess = () => (
  <section className={style.registrationSuccess}>
    <div className={style.registrationSuccessWrapper}>
      <Check className={style.registrationSuccessCheck} />
      <div className={style.registrationSuccessTextWrapper}>
        <h2 className={style.registrationSuccessTitle}>
          Вы успешно зарегистрировались на платформе 7 Монет!
        </h2>
        <p className={style.registrationSuccessText}>
          <a href='/application'>Перейти в личный кабинет</a>
        </p>
      </div>
    </div>
  </section>
);
