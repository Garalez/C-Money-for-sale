import style from '../AccountInfo.module.scss';
import PropTypes from 'prop-types';
import {
  formatDateToNumericForCreation,
  formatDateToNumericForTransaction,
} from '../../../../../../utils/formatDate';
import { APP_CURRENCY_SIGN } from '../../../../../../utils/appCurrencySign';

export const MyAccounts = ({ account }) => (
  <li className={style.accountItem}>
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
          {account.lastTransaction ?
            formatDateToNumericForTransaction(account.lastTransaction) :
            '---'}
        </p>
      </div>
    </div>
  </li>
);

MyAccounts.propTypes = {
  account: PropTypes.object,
};
