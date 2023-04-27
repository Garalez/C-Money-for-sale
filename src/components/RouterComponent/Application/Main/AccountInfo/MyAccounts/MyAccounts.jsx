import style from '../AccountInfo.module.scss';
import PropTypes from 'prop-types';
import { formatDateToNumeric } from '../../../../../../utils/formatDate';
import { APP_CURRENCY_SIGN } from '../../../../../../utils/appCurrencySign';

export const MyAccounts = ({ account }) => (
  <li className={style.accountItem}>
    <p className={style.accountNumber}>{account.account}</p>
    <p
      className={style.accountAmount}
    >{`${account.balance} ${APP_CURRENCY_SIGN}`}</p>
    <p
      className={style.accountAmount}
    >533 277 ₽</p>
    <div className={style.accountInfo}>
      <div className={style.accountInfoTextWrapper}>
        <p className={style.accountInfoText}>открыт</p>
        <p className={style.accountInfoText}>
          {account.date ? formatDateToNumeric(account.date) : '---'}
        </p>
      </div>
      <div className={style.accountInfoTextWrapper}>
        <p className={style.accountInfoText}>последняя операция</p>
        <p className={style.accountInfoText}>
          {account.transactions & (account.transactions.length > 0) ?
            formatDateToNumeric(account.transactions[0].date) :
            '---'}
        </p>
      </div>
    </div>
  </li>
);

MyAccounts.propTypes = {
  account: PropTypes.object,
};
