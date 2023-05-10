/* eslint-disable max-len */
import style from './Payments.module.scss';
import { useState } from 'react';
import { ReactComponent as CheckMark } from './checkMark.svg';
import { ReactComponent as CommentSign } from './noComments.svg';
import { ReactComponent as BankSign } from './bank.svg';
import { useNavigate } from 'react-router-dom';

export const Payments = () => {
  const navigate = useNavigate();
  const [isUserCopyPhone, setIsUserCopyPhone] = useState(false);
  const [isUserCopyCard, setIsUserCopyCard] = useState(false);

  const copyPhoneNumberToClipboard = () => {
    navigator.clipboard.writeText('+79189630837');
    setIsUserCopyPhone(true);
  };

  const copyCardNumberToClipboard = () => {
    navigator.clipboard.writeText('2202205325555214');
    setIsUserCopyCard(true);
  };

  const backToAccount = () => {
    navigate('/application/accounts');
  };

  return (
    <section className={style.paymentSection}>
      <div className={style.paymentWrapper}>
        <h2 className={style.paymentSectionTitle}>Пополнение счёта</h2>
        <div className={style.paymentContentWrapper}>
          <p className={style.paymentSectionSubtitle}>Перевод средств</p>
          <ul className={style.paymentList}>
            <li
              className={style.paymentItem}
              onClick={copyPhoneNumberToClipboard}
            >
              <div className={style.paymentPhoneWrapper}>
                <p className={style.paymentPhone}>+7 918 963-08-37</p>
                <button
                  className={style.paymentPhoneBtn}
                  onClick={copyPhoneNumberToClipboard}
                >
                  {isUserCopyPhone ? (
                    <span className={style.copied}>
                      <CheckMark className={style.checkMark} />
                      скопировано
                    </span>
                  ) : (
                    <span className={style.notCopied}>скопировать</span>
                  )}
                </button>
              </div>
            </li>
            <li className={style.paymentItem}>Анастасия С.</li>
            <li
              className={style.paymentItem}
              onClick={copyCardNumberToClipboard}
            >
              <div className={style.paymentCardWrapper}>
                <div className={style.paymentCardBankWrapper}>
                  <img
                    className={style.paymentLogo}
                    src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4gPGRlZnM+IDxsaW5lYXJHcmFkaWVudCBpZD0icHJlZml4X19hIiB4MT0iNTguMTY4JSIgeDI9IjUuMjA3JSIgeTE9IjAlIiB5Mj0iNzEuNDA1JSI+IDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMTg3QzgiLz4gPHN0b3Agb2Zmc2V0PSIzMS4zMzIlIiBzdG9wLWNvbG9yPSIjMDhBNjUyIi8+IDxzdG9wIG9mZnNldD0iNzIuMzg0JSIgc3RvcC1jb2xvcj0iIzA4QTY1MiIvPiA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGQUVGMjMiLz4gPC9saW5lYXJHcmFkaWVudD4gPC9kZWZzPiA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiA8cGF0aCBmaWxsPSJ1cmwoI3ByZWZpeF9fYSkiIGQ9Ik0xMCAwYzIuNDAzIDAgNC42MDguODQ3IDYuMzMyIDIuMjZMMTQuNjEgMy42MzdjLTEuMjk1LS45NC0yLjg4OC0xLjQ5NC00LjYxMS0xLjQ5NC00LjM0IDAtNy44NTcgMy41MTgtNy44NTcgNy44NTcgMCA0LjM0IDMuNTE4IDcuODU3IDcuODU3IDcuODU3IDQuMzQgMCA3Ljg1Ny0zLjUxOCA3Ljg1Ny03Ljg1NyAwLS4xLS4wMDItLjItLjAwNS0uM2wxLjk5Ny0xLjQ0MmMuMS41NjYuMTUxIDEuMTQ4LjE1MSAxLjc0MiAwIDUuNTIzLTQuNDc3IDEwLTEwIDEwUzAgMTUuNTIzIDAgMTAgNC40NzcgMCAxMCAweiIvPiA8cGF0aCBmaWxsPSIjMjI5RTM5IiBkPSJNNi4yMzggNy41NjNMMTAgMTAgMTguMTE4IDQuMDUgMTkuMzI0IDYuMDA5IDEwIDEyLjgyMyA2LjIzOCAxMC40NzV6Ii8+IDwvZz4gPC9zdmc+'
                    alt=''
                  />
                  <p className={style.paymentCardNumber}>Сбер *5214</p>
                </div>
                <button
                  className={style.paymentPhoneBtn}
                  onClick={copyCardNumberToClipboard}
                >
                  {isUserCopyCard ? (
                    <span className={style.copied}>
                      <CheckMark className={style.checkMark} />
                      скопировано
                    </span>
                  ) : (
                    <span className={style.notCopied}>скопировать</span>
                  )}
                </button>
              </div>
            </li>
          </ul>

          <div className={style.paymentWarningWrapper}>
            <p className={style.paymentWarningText}>
              <BankSign className={style.bankLogo} />
              Убедитесь, что переводите в Сбер
            </p>
            <p className={style.paymentWarningText}>
              <CommentSign className={style.commentLogo} />
              Не оставляйте комментарий к переводу.
            </p>
          </div>

          <div className={style.paymentAgreementWrapper}>
            <button
              className={style.paymentAgreementBtn}
              onClick={backToAccount}
            >
              Отмена
            </button>
            <button
              className={style.paymentAgreementBtn}
              onClick={backToAccount}
            >
              Перевод выполнен
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
