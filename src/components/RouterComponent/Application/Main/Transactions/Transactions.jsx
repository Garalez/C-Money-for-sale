/* eslint-disable max-len */
import style from './Transactions.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ReactComponent as BackArrowSvg } from '../../../../../assets/svg/whiteBackArrow.svg';
import { userAccountInfoRequestAsync } from '../../../../../store/accountInfoRequest/accountInfoRequestActions';
import { Preloader } from '../../../../../UI/Preloader/Preloader';
import LineGraph from './LineGraph';
import DoughnutGraph from './DoughnutGraph';
import Table from './Table';
import FundsTransfer from './FundsTransfer';

export const Transactions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const accountId = searchParams.get('id');
  const accountInfo = useSelector((state) => state.userAccountInfo);

  useEffect(() => {
    dispatch(userAccountInfoRequestAsync(accountId));
  }, []);

  return (
    <section className={style.transactions}>
      {accountInfo.status === 'loaded' ? (
        <>
          <div className={style.transactionsTitleWrapper}>
            <h1
              className={style.transactionsTitle}
            >{`Счет №${accountInfo.accountInfo.account}`}</h1>
            <button
              className={style.transactionsBtn}
              onClick={() => navigate(-1)}
            >
              <BackArrowSvg /> Вернуться
            </button>
          </div>
          <div className={style.infoWrapper}>
            <div className={style.transactionsGraphs}>
              <LineGraph accountInfo={accountInfo.accountInfo} />
              <DoughnutGraph accountInfo={accountInfo.accountInfo} />
            </div>
            <Table accountInfo={accountInfo.accountInfo} />
          </div>
        </>
      ) : (
        <Preloader color='white' />
      )}
      {accountInfo.accountInfo.account && (
        <FundsTransfer accountInfo={accountInfo.accountInfo} />
      )}
    </section>
  );
};
