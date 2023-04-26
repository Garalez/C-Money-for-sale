/* eslint-disable max-len */
import style from './RegistrationSuccess.module.scss';
import { ReactComponent as Check } from '../../../../../../assets/svg/registrationSuccessCheckmark.svg';
import { useNavigate } from 'react-router-dom';

export const RegistrationSuccess = () => {
  const navigate = useNavigate();

  return (
    <section className={style.registrationSuccess}>
      <div className={style.registrationSuccessWrapper}>
        <Check className={style.registrationSuccessCheck} />
        <div className={style.registrationSuccessTextWrapper}>
          <h2 className={style.registrationSuccessTitle}>
            Вы успешно зарегистрировались на платформе 7 Монет!
          </h2>
          <div className={style.registrationSuccessText}>
            <div
              className={style.registrationSuccessLink}
              onClick={() => navigate('application')}
            >
              Перейти в личный кабинет
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
