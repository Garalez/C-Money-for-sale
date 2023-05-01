/* eslint-disable max-len */
import { formatDateToNumericForTransaction } from '../../../../../../utils/formatDate';
import style from './UserInfoTable.module.scss';
import PropTypes from 'prop-types';

export const UserInfoTable = ({ account }) => {
  let transactions;
  if (account.transactions.length > 9) {
    transactions = account.transactions.slice(-9);
  } else {
    transactions = account.transactions;
  }

  return (
    <section className={style.historyWrapper}>
      <h2 className={style.historyTitle}>История переводов</h2>
      <div className={style.historyTableBackground}>
        <div className={style.historyTableWrapper}>
          <table className={style.historyTable}>
            <thead className={style.historyTableThead}>
              <tr className={style.historyTableRow}>
                <th className={style.historyTableHeading}>Дата</th>
                <th className={style.historyTableHeading}>Сумма</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item, index) => (
                <tr key={index} className={style.historyTableRow}>
                  <td className={style.historyTableCell}>
                    {formatDateToNumericForTransaction(item.date)}
                  </td>
                  <td className={style.historyTableCell}>
                    <p
                      className={item.rubDiff < 0 ? style.expenses : undefined}
                    >
                      {item.rubDiff}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

UserInfoTable.propTypes = {
  account: PropTypes.object,
};
