/* eslint-disable max-len */
import style from '../Registration.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { usersRequestAsync } from '../../../../../../store/usersRequest/usersRequestActions';

export const AccountCreationForm = ({
  accountCreationFormSubmit,
  formValues,
  handleChange,
}) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [isUserExists, setIsUserExists] = useState(false);
  const [isInputValid, setIsInputValid] = useState({
    login: true,
    password: true,
    confirmPassword: true,
  });

  useEffect(() => {
    dispatch(usersRequestAsync());
  }, []);

  const handleBlur = (e) => {
    const { name } = e.target;

    setIsInputValid({ ...isInputValid, [name]: !!formValues[name] });
    if (name === 'login') setIsUserExists(false);
  };

  const localHandleChange = (e) => {
    const { name } = e.target;

    handleChange(e);
    setIsInputValid({ ...isInputValid, [name]: !!formValues[name] });

    if (name === 'login') setIsUserExists(false);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const isUserExist = users.accounts.find((user) => user.login === formValues.login);

    if (isUserExist) {
      setIsUserExists(true),
      setIsInputValid({
        login: true,
        password: true,
        confirmPassword: true,
      });

      return;
    }

    if (
      formValues.login &&
      formValues.password &&
      formValues.confirmPassword === formValues.password
    ) {
      accountCreationFormSubmit();
    } else {
      setIsInputValid({
        login: !!formValues.login,
        password: !!formValues.password,
        confirmPassword: formValues.confirmPassword === formValues.password,
      });
    }
  };

  return (
    <form
      className={style.registrationForm}
      action=''
      onSubmit={(e) => formSubmit(e)}
    >
      <ul className={style.registrationInputList}>
        <li className={style.registrationInputItem}>
          <label className={style.registrationLabel} htmlFor='login'>
            Придумайте логин
          </label>
          <input
            className={style.registrationInput}
            type='text'
            id='login'
            name='login'
            value={formValues.login}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => localHandleChange(e)}
          />{' '}
          {!isInputValid.login && (
            <p className={style.inputsError}>Неправильный логин</p>
          )}
          {isUserExists && (
            <p className={style.inputsError}>Логин уже существует</p>
          )}
        </li>
        <li className={style.registrationInputItem}>
          <label className={style.registrationLabel} htmlFor='password'>
            Придумайте пароль
          </label>
          <input
            className={style.registrationInput}
            type='password'
            id='password'
            name='password'
            value={formValues.password}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
          />{' '}
          {!isInputValid.password && (
            <p className={style.inputsError}>Неправильный пароль</p>
          )}
        </li>
        <li className={style.registrationInputItem}>
          <label className={style.registrationLabel} htmlFor='confirmPassword'>
            Повторите пароль
          </label>
          <input
            className={style.registrationInput}
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={formValues.confirmPassword}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
          />
          {!isInputValid.confirmPassword && (
            <p className={style.inputsError}>Пароли не совпадают</p>
          )}
        </li>
        <li className={style.registrationInputItem}>
          <div className={style.registrationAgreementWrapper}>
            <button className={style.nextBtn} disabled={users.status !== 'loaded'}>Зарегистрироваться</button>
            <div className={style.registrationPolicyWrapper}>
              <div className={style.customCheckboxWrapper}>
                <input
                  className={style.customCheckboxInput}
                  type='checkbox'
                  id='customCheckbox'
                />
                <label
                  className={style.customCheckboxLabel}
                  htmlFor='customCheckbox'
                >
                  <div className={style.customCheckboxAgreement}>
                    By clicking on the button, I consent to the processing of
                    personal data and agree to the privacy policy
                  </div>
                </label>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </form>
  );
};

AccountCreationForm.propTypes = {
  accountCreationFormSubmit: PropTypes.func,
  formValues: PropTypes.object,
  handleChange: PropTypes.func,
};
