import style from './UserFormAdminPanel.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { updateUserInfo } from '../../../../../../utils/updateUserInfo';

export const UserFormAdminPanel = ({ user }) => {
  const [userCurrency, setUserCurrency] = useState({
    rub: user.rub,
    bit: user.bit,
  });

  const inputControl = (e) => {
    const { name, value } = e.target;
    setUserCurrency({ ...userCurrency, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    updateUserInfo({
      id: user.id,
      rub: +userCurrency.rub,
      bit: +userCurrency.bit,
      lastTransaction: new Date(),
    });
  };

  return (
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
