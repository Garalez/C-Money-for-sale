/* eslint-disable max-len */
import style from './Auth.module.scss';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  // const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userData'));

  const [userAccountData, setUserAccountData] = useState({
    login: '',
    password: '',
  });

  const [displayErrorMassage, setDisplayErrorMassage] = useState(false);

  // const inputValidation = () => {
  //   setDisplayErrorMassage({
  //     login: !!(userAccountData.login && userAccountData.login !== userData.login),
  //     password: !!(userAccountData.password && userAccountData.password !== userData.password),
  //   });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const regexNonWord = /[^a-zA-Z0-9]/;

    setUserAccountData({
      ...userAccountData,
      [name]: value.replace(regexNonWord, ''),
    });

    // if (e.target.name === 'login' && value === userData.login) {
    //   setDisplayErrorMassage({ ...displayErrorMassage, login: false });
    // }

    // if (e.target.name === 'password' && value === userData.password) {
    //   setDisplayErrorMassage({ ...displayErrorMassage, password: false });
    // }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      userAccountData.login === userData.login &&
      userAccountData.password === userData.password
    ) {
      localStorage.setItem('isUserLoggedIn', true);
      location.reload();
    } else {
      setDisplayErrorMassage(true);
    }
  };

  return (
    <section>
      <div className={style.authOverlay}>
        <div className={style.authWrapper}>
          <h1 className={style.authTitle}>Вход в аккаунт</h1>
          <form action='' onSubmit={(e) => handleFormSubmit(e)}>
            <ul className={style.authInputList}>
              <li className={style.authInputItem}>
                <label className={style.authLabel} htmlFor='login'>
                  Логин
                </label>
                <input
                  className={style.authInput}
                  type='text'
                  id='login'
                  name='login'
                  onChange={(e) => handleChange(e)}
                  value={userAccountData.login}
                  // onBlur={() => inputValidation()}
                  required
                />
              </li>
              <li className={style.authInputItem}>
                <label className={style.authLabel} htmlFor='password'>
                  Пароль
                </label>
                <input
                  className={style.authInput}
                  type='text'
                  id='password'
                  name='password'
                  onChange={(e) => handleChange(e)}
                  value={userAccountData.password}
                  // onBlur={() => inputValidation()}
                  required
                />
              </li>
            </ul>
            <div className={style.authBtnWrapper}>
              <button className={style.authFormSubmit} type='submit'>
                Войти
              </button>
              {displayErrorMassage && (
                <p className={style.authInputError}>
                  Неверный данные. Попробуйте еще раз
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
