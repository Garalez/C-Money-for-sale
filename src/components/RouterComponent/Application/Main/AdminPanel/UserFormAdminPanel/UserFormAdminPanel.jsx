/* eslint-disable max-len */
import style from './UserFormAdminPanel.module.scss';
import { userInfoUpdateRequestAsync } from '../../../../../../store/userInfoUpdateRequest/userInfoUpdateRequestActions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Preloader from '../../../../../../UI/Preloader';
import PropTypes from 'prop-types';

export const UserFormAdminPanel = ({ user }) => {
  const dispatch = useDispatch();
  const isUserUpdated = useSelector((state) => state.userInfoUpdate);

  useEffect(() => {
    if (isUserUpdated.status === 'loaded') location.reload();
  }, [isUserUpdated.status]);

  const [userCurrency, setUserCurrency] = useState({
    rub: user.rub,
    bit: user.bit,
  });

  const inputControl = (e) => {
    const { name, value } = e.target;
    const regexDigitsAndMinus = /[^-\d]/;
    const inputValue = value.replace(regexDigitsAndMinus, '');

    setUserCurrency({ ...userCurrency, [name]: inputValue });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    dispatch(
      userInfoUpdateRequestAsync({
        id: user.id,
        rub: +userCurrency.rub,
        bit: +userCurrency.bit,
        lastTransaction: new Date(),
      })
    );
  };

  return isUserUpdated.status !== '' ? (
    <Preloader color={'white'} />
  ) : (
    <li className={style.userFormItem}>
      <form className={style.userForm} onSubmit={(e) => formSubmit(e)}>
        <h2
          className={style.userFormTitle}
        >{`${user.name} ${user.lastName}`}</h2>
        <div className={style.userFormLabelsWrapper}>
          <label className={style.userFormLabel}>
            <p className={style.userFormAccount}>Рублёвый счёт:</p>
            <input
              className={style.userFormInput}
              name='rub'
              type='text'
              value={userCurrency.rub}
              onChange={(e) => inputControl(e)}
            />
          </label>

          <label className={style.userFormLabel}>
            <p className={style.userFormAccount}>Bitcoin счёт:</p>
            <input
              className={style.userFormInput}
              name='bit'
              type='text'
              value={userCurrency.bit}
              onChange={(e) => inputControl(e)}
            />
          </label>
          <button className={style.userFormSubmitBtn} type='submit'>
            Сохранить
          </button>
        </div>
      </form>
    </li>
  );
};

UserFormAdminPanel.propTypes = {
  user: PropTypes.object,
};
