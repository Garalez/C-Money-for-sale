/* eslint-disable max-len */
import style from './WithdrawPanel.module.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ModalWindow } from '../../../../../UI/ModalWindow/ModalWindow';
import { userInfoUpdateRequestAsync } from '../../../../../store/userInfoUpdateRequest/userInfoUpdateRequestActions';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import Preloader from '../../../../../UI/Preloader';

export const WithdrawPanel = ({ userData }) => {
  const dispatch = useDispatch();
  const isUserUpdated = useSelector((state) => state.userInfoUpdate);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayError, setDisplayError] = useState({
    isCardValid: true,
    isSumCorrect: true,
  });
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

    const checkIfInputContainsOnlyNumbers = inputValues.card
      .split(' ')
      .every((el) => Number.isFinite(+el));

    if (!checkIfInputContainsOnlyNumbers) {
      return setDisplayError({ isCardValid: false, isSumCorrect: true });
    }

    if (userData.rub - +inputValues.rub < 0) {
      return setDisplayError({ isCardValid: true, isSumCorrect: false });
    } else if (+inputValues.rub <= 0) {
      return setDisplayError({ isCardValid: true, isSumCorrect: false });
    } else {
      setDisplayError({ isCardValid: true, isSumCorrect: true });
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
                  <span
                    className={style.contentSpan}
                  >{`${inputValues.rub} ₽`}</span>
                  <span className={style.contentSpan}>На карту :</span>
                  <span
                    className={style.contentSpan}
                  >{`${inputValues.card}`}</span>
                  <span className={style.contentSpan}>Остаток на счету :</span>
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
            <div className={style.withdrawReturnBtnWrapper}>
              <button
                className={style.withdrawReturnBtn}
                onClick={() => navigate('/application/accounts')}
              >
                Вернутся
              </button>
            </div>
            <h2 className={style.withdrawTitle}>Вывод средств</h2>
            <form
              className={style.withdrawForm}
              onSubmit={(e) => handleSubmit(e)}
            >
              <ul className={style.withdrawList}>
                <li className={style.withdrawItem}>
                  <label className={style.withdrawLabel}>
                    <p className={style.withdrawSubtitle}>Номер карты:</p>
                    <InputMask
                      className={style.withdrawInput}
                      value={inputValues.card}
                      name='card'
                      mask='9999 9999 9999 9999'
                      inputMode='numeric'
                      onChange={(e) => inputControl(e)}
                      maskChar='_'
                    />
                    ;
                  </label>
                </li>
                <li className={style.withdrawItem}>
                  <label className={style.withdrawLabel}>
                    <p className={style.withdrawSubtitle}>Сумма в рублях:</p>
                    <div className={style.withdrawRubInputWrapper}>
                      <InputMask
                        className={style.withdrawInput}
                        value={inputValues.rub}
                        name='rub'
                        mask='9999999'
                        inputMode='numeric'
                        onChange={(e) => inputControl(e)}
                        maskChar=''
                      />
                    </div>
                  </label>
                </li>
                <li className={style.withdrawItem}>
                  <button className={style.withdrawBtn} type='submit'>
                    Вывести
                  </button>
                </li>
              </ul>
            </form>
            {!displayError.isSumCorrect && (
              <p className={style.withdrawError}>Неверно введена сумма</p>
            )}
            {!displayError.isCardValid && (
              <p className={style.withdrawError}>Неверно введена карта</p>
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
