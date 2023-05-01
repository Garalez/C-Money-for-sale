/* eslint-disable max-len */
import style from './WithdrawPanel.module.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalWindow } from '../../../../../UI/ModalWindow/ModalWindow';
import { userInfoUpdateRequestAsync } from '../../../../../store/userInfoUpdateRequest/userInfoUpdateRequestActions';
import PropTypes from 'prop-types';
import Preloader from '../../../../../UI/Preloader';

export const WithdrawPanel = ({ userData }) => {
  const dispatch = useDispatch();
  const isUserUpdated = useSelector((state) => state.userInfoUpdate);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [isSumCorrect, setIsSumCorrect] = useState(true);
  const [inputValues, setInputValues] = useState({
    card: '',
    rub: '',
  });

  useEffect(() => {
    if (isUserUpdated.status === 'loaded') {
      location.reload();
    }
  }, [isUserUpdated.status]);

  const inputControl = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });

    if (inputValues.card.length >= 16) {
      return setInputValues({
        ...inputValues,
        [name]: value.slice(0, 16),
      });
    }
  };

  const modalAnswerConfirm = () => {
    dispatch(
      userInfoUpdateRequestAsync({
        id: userData.id,
        rub: userData.rub - +inputValues.rub,
        transactions: [
          ...userData.transactions,
          {
            date: new Date(),
            rub: userData.rub - +inputValues.rub,
            rubDiff: -inputValues.rub,
            bit: userData.bit,
            bitDiff: 0,
          },
        ],
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.rub - +inputValues.rub < 0) {
      return [setDisplayError(true), setIsSumCorrect(true)];
    } else if (+inputValues.rub <= 0) {
      return [setIsSumCorrect(false), setDisplayError(false)];
    } else {
      setDisplayError(false);
      setIsSumCorrect(true);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {isUserUpdated.status !== '' ? (
        <Preloader color={'white'} />
      ) : (
        <>
          {isModalOpen && (
            <ModalWindow
              content={
                <>
                  <span className={style.contentSpan}>Подтвердите перевод</span>
                  <span className={style.contentSpan}>На карту</span>
                  <span
                    className={style.contentSpan}
                  >{`${inputValues.card}`}</span>
                  <span className={style.contentSpan}>Остаток на счету</span>
                  <span className={style.contentSpan}>{`${
                    userData.rub - +inputValues.rub
                  } ₽`}</span>
                </>
              }
              modalConfirmAction={modalAnswerConfirm}
              closeModal={() => setIsModalOpen(false)}
            />
          )}
          <section className={style.withdraw}>
            <h2 className={style.withdrawTitle}>Вывод средств</h2>
            <form
              className={style.withdrawForm}
              onSubmit={(e) => handleSubmit(e)}
            >
              <ul className={style.withdrawList}>
                <li className={style.withdrawItem}>
                  <label className={style.withdrawLabel}>
                    <p className={style.withdrawSubtitle}>Номер карты:</p>
                    <input
                      className={style.withdrawInput}
                      type='number'
                      name='card'
                      onChange={(e) => inputControl(e)}
                      value={inputValues.card}
                    />
                  </label>
                </li>
                <li className={style.withdrawItem}>
                  <label className={style.withdrawLabel}>
                    <p className={style.withdrawSubtitle}>Сумма рублей:</p>
                    <input
                      className={style.withdrawInput}
                      type='number'
                      name='rub'
                      onChange={(e) => inputControl(e)}
                      value={inputValues.rub}
                    />
                  </label>
                </li>
                <li className={style.withdrawItem}>
                  <button className={style.withdrawBtn} type='submit'>
                    Вывести
                  </button>
                </li>
              </ul>
            </form>
            {displayError && (
              <div>
                <p className={style.withdrawError}>Недостаточно средств</p>
              </div>
            )}
            {!isSumCorrect && (
              <div>
                <p className={style.withdrawError}>Неверно введена сумма</p>
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
};

WithdrawPanel.propTypes = {
  userData: PropTypes.object,
};
