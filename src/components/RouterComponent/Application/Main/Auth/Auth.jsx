/* eslint-disable max-len */
import style from './Auth.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userDataRequestAsync } from '../../../../../store/userDataRequest/userDataActions';
import { Preloader } from '../../../../../UI/Preloader/Preloader';
import { useEffect } from 'react';

export const Auth = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  useEffect(() => {
    if (userData.status === 'loaded') {
      location.reload();
    }
  }, [userData.status]);

  const [userAccountData, setUserAccountData] = useState({
    login: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserAccountData({
      ...userAccountData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(userDataRequestAsync(userAccountData.login, userAccountData.password));
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
                  required
                />
              </li>
              <li className={style.authInputItem}>
                <label className={style.authLabel} htmlFor='password'>
                  Пароль
                </label>
                <input
                  className={style.authInput}
                  type='password'
                  id='password'
                  name='password'
                  onChange={(e) => handleChange(e)}
                  value={userAccountData.password}
                  required
                />
              </li>
            </ul>
            <div className={style.authBtnWrapper}>
              <button className={style.authFormSubmit} type='submit'>
                Войти
              </button>
              {userData.status === 'loading' ? (
                  <Preloader color={'white'} />
              ) : userData.status === 'rejected' ? (
                <p className={style.authInputError}>
                  Неверные данные пользователя
                </p>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
