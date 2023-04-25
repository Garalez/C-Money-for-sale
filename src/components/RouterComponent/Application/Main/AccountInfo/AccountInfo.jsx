/* eslint-disable max-len */
import style from './AccountInfo.module.scss';
import MyAccounts from './MyAccounts';

export const AccountInfo = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  const userAccounts = [{
    account: 'Bitcoin',
    balance: 35,
    date: new Date(),
    transactions: [{
      date: '2021-10-10T00:00:00.000Z',
      amount: 0.00000000,
      currency: 'Bitcoin',
    }],
  }];

  return (
    <section className={style.account}>
      <div className={style.accountWrapper}>
        <div className={style.accountTitleWrapper}>
          <h1 className={style.accountTitle}>Здравствуйте, {userData.name}!</h1>
          <button className={style.accountBtn}>Пополнить счёт</button>
        </div>
        <div className={style.accountInfoWrapper}>
          <p className={style.accountSubtitle}>Мои счета</p>
        </div>
        <ul className={style.accountList}>
          {userAccounts.map((account) => (
            <MyAccounts key={account.account} account={account} />
          ))}
        </ul>
      </div>
    </section>
  );
};
