/* eslint-disable max-len */
import style from './UserTransactionsInfo.module.scss';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { formatDateToNumericForTransaction } from '../../../../../../utils/formatDate';
import { userAccountInfoRequestAsync } from '../../../../../../store/accountInfoRequest/accountInfoRequestActions';
import { Preloader } from '../../../../../../UI/Preloader/Preloader';

export const UserTransactionsInfo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { status, accountInfo } = useSelector((state) => state.userAccountInfo);

  useEffect(() => {
    dispatch(userAccountInfoRequestAsync(params.id));
  }, []);

  return status !== 'loaded' ? (
    <Preloader color={'white'} />
  ) : (
    <section className={style.historyWrapper}>
      <button
        className={style.historyBtn}
        onClick={() => navigate('/application/adminPanel')}
      >
        Назад
      </button>
      <h2 className={style.historyTitle}>Информация о выводе средств</h2>
      <p
        className={style.historyUserName}
      >{`${accountInfo.name} ${accountInfo.lastName}`}</p>
      <div className={style.historyTableBackground}>
        <div className={style.historyTableWrapper}>
          <table className={style.historyTable}>
            <thead className={style.historyTableThead}>
              <tr className={style.historyTableRow}>
                <th className={style.historyTableHeading}>Дата</th>
                <th className={style.historyTableHeading}>Карта</th>
                <th className={style.historyTableHeading}>Сумма</th>
              </tr>
            </thead>
            <tbody>
              {accountInfo.transactions.map((item, index) => {
                if (item.userCard) {
                  return (
                    <tr key={index} className={style.historyTableRow}>
                      <td className={style.historyTableCell}>
                        {formatDateToNumericForTransaction(item.date)}
                      </td>
                      <td className={style.historyTableCell}>
                        {item.userCard}
                      </td>
                      <td className={style.historyTableCell}>
                        <p
                          className={
                            item.rubDiff < 0 ? style.expenses : undefined
                          }
                        >
                          {`${item.rubDiff} ₽`}
                        </p>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
