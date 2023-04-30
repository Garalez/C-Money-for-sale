import style from './WithdrawPanel.module.scss';

export const WithdrawPanel = () => {
  console.log('style');
  return (
    <section className={style.withdraw}>
      <h2 className={style.withdrawTitle}>Вывод средств</h2>
      <form className={style.withdrawForm}>
        <ul className={style.withdrawList}>
          <li className={style.withdrawItem}>
            <label className={style.withdrawLabel}>
              <p className={style.withdrawSubtitle}>Номер карты:</p>
              <input className={style.withdrawInput} type='text' />
            </label>
          </li>
          <li className={style.withdrawItem}>
            <label className={style.withdrawLabel}>
              <p className={style.withdrawSubtitle}>Сумма рублей</p>
              <input className={style.withdrawInput} type='text' />
            </label>
          </li>
          <li className={style.withdrawItem}>
            <button className={style.withdrawBtn} type='submit'>Вывести</button>
          </li>
        </ul>
      </form>
    </section>
  );
};
