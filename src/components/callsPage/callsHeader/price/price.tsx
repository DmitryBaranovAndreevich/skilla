import styles from './price.module.css';
import { ReactComponent as BalanceIcon } from '../../../../assets/balance-icon.svg';

const Price = () => {
  return (
    <div className={styles.container}>
      <p className={styles.balance}>Баланс: 272 ₽</p>
      <button className={styles.button}>
        <BalanceIcon width="24" height="24" />
      </button>
    </div>
  );
};

export default Price;
