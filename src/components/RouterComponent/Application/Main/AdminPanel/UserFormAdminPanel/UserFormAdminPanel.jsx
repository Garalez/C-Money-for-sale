/* eslint-disable max-len */
import style from './UserFormAdminPanel.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { userInfoUpdateRequestAsync } from '../../../../../../store/userInfoUpdateRequest/userInfoUpdateRequestActions';
import { userDeleteRequestAsync } from '../../../../../../store/userDeleteRequest/userDeleteRequestActions';
import { ModalWindow } from '../../../../../../UI/ModalWindow/ModalWindow';
import Preloader from '../../../../../../UI/Preloader';
import PropTypes from 'prop-types';

export const UserFormAdminPanel = ({ user }) => {
  const dispatch = useDispatch();
  const isUserUpdated = useSelector((state) => state.userInfoUpdate);
  const isUserDeleted = useSelector((state) => state.userDelete);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(true);
  const [userCurrency, setUserCurrency] = useState({
    rub: user.rub,
    bit: user.bit,
  });

  useEffect(() => {
    if (
      isUserUpdated.status === 'loaded' ||
      isUserDeleted.status === 'loaded'
    ) {
      location.reload();
    }
  }, [isUserUpdated.status, isUserDeleted.status]);

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const inputControl = (e) => {
    const { name, value } = e.target;

    setUserCurrency({ ...userCurrency, [name]: value });
    if (isButtonActive) setIsButtonActive(false);
  };

  const modalAnswerConfirm = () => {
    dispatch(
      userInfoUpdateRequestAsync({
        id: user.id,
        rub: +userCurrency.rub,
        bit: +userCurrency.bit,
        transactions: [
          ...user.transactions,
          {
            date: new Date(),
            rub: +userCurrency.rub,
            rubDiff: +userCurrency.rub - user.rub,
            bit: +userCurrency.bit,
            bitDiff: +userCurrency.bit - user.bit,
          },
        ],
      })
    );
  };

  const deleteUser = () => {
    dispatch(userDeleteRequestAsync(user.id));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    setIsModalOpen(true);
  };

  return (
    <>
      {isUserUpdated.status !== '' || isUserDeleted.status !== '' ? (
        <Preloader color={'white'} />
      ) : (
        <>
          {isModalOpen && (
            <ModalWindow
              content={
                <>
                  <span className={style.contentSpan}>
                    Изменить пользователю
                  </span>
                  <span className={style.contentSpan}>{`${capitalize(
                    user.name
                  )} ${capitalize(user.lastName)}`}</span>
                  <span className={style.contentSpan}>счета на</span>
                  <span
                    className={style.contentSpan}
                  >{`Рублёвый: ${userCurrency.rub} ₽`}</span>
                  <span
                    className={style.contentSpan}
                  >{`Bitcoin: ${userCurrency.bit} ₿`}</span>
                </>
              }
              modalConfirmAction={modalAnswerConfirm}
              closeModal={() => setIsModalOpen(false)}
            />
          )}
          <li className={style.userFormItem}>
            <form className={style.userForm} onSubmit={formSubmit}>
              <h2
                className={style.userFormTitle}
              >{`${user.name} ${user.lastName}`}</h2>
              <div className={style.userFormContentWrapper}>
                <div className={style.userFormLabelsWrapper}>
                  <label className={style.userFormLabel}>
                    <p className={style.userFormAccount}>Рублёвый счёт:</p>
                    <input
                      className={style.userFormInput}
                      name='rub'
                      type='number'
                      value={userCurrency.rub}
                      onChange={inputControl}
                    />
                  </label>

                  <label className={style.userFormLabel}>
                    <p className={style.userFormAccount}>Bitcoin счёт:</p>
                    <input
                      className={style.userFormInput}
                      name='bit'
                      type='number'
                      value={userCurrency.bit}
                      onChange={inputControl}
                    />
                  </label>
                </div>
                <div className={style.userFormBtnWrapper}>
                  <button
                    className={style.userFormSubmitBtn}
                    type='submit'
                    disabled={isButtonActive}
                  >
                    Сохранить
                  </button>
                  <button
                    className={style.userFormDeleteBtn}
                    type='button'
                    onClick={() => setDeleteUserModal(true)}
                  >
                    Удалить пользователя
                  </button>
                </div>
              </div>
            </form>
            {deleteUserModal && (
              <ModalWindow
                content={
                  <>
                    <span className={style.contentSpan}>
                      Удалить пользователя
                    </span>
                    <span className={style.contentSpan}>{`${capitalize(
                      user.name
                    )} ${capitalize(user.lastName)}`}</span>
                  </>
                }
                modalConfirmAction={deleteUser}
                closeModal={() => setDeleteUserModal(false)}
              />
            )}
          </li>
        </>
      )}
    </>
  );
};

UserFormAdminPanel.propTypes = {
  user: PropTypes.object,
};
