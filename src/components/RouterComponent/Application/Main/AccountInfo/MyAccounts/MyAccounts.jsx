import style from '../AccountInfo.module.scss';
import PropTypes from 'prop-types';
import { APP_CURRENCY_SIGN } from '../../../../../../utils/appCurrencySign';
import {
  formatDateToNumericForCreation,
  formatDateToNumericForTransaction,
} from '../../../../../../utils/formatDate';

export const MyAccounts = ({ account }) => (
  <section className={style.accountSection}>
    <div className={style.accountSectionWrapper}>
      <h2 className={style.accountInfoTitle}>Мои счета</h2>
      <div className={style.accountItem}>
        <p className={style.accountNumber}>Bitcoin</p>
        <p
          className={style.accountAmount}
        >{`${account.bit} ${APP_CURRENCY_SIGN}`}</p>
        <p className={style.accountAmount}>{`${account.rub} ₽`}</p>
        <div className={style.accountInfo}>
          <div className={style.accountInfoTextWrapper}>
            <p className={style.accountInfoText}>открыт</p>
            <p className={style.accountInfoText}>
              {account.creationDate ?
                formatDateToNumericForCreation(account.creationDate) :
                '---'}
            </p>
          </div>
          <div className={style.accountInfoTextWrapper}>
            <p className={style.accountInfoText}>последняя операция</p>
            <p className={style.accountInfoText}>
              {account.transactions.length > 0 ?
                formatDateToNumericForTransaction(
                  account.transactions[0].date
                ) :
                '---'}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

MyAccounts.propTypes = {
  account: PropTypes.object,
};
