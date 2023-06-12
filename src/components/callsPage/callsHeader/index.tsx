import { type } from 'os';
import Input from '../../UI/input';
import Filter from '../../filters';
import styles from './callsHeader.module.css';
import DaySelect from './daySelect';
import Price from './price/price';
import { SelectType } from '../../select';

const CallsHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Price />
        <DaySelect text={'3 дня'} items={['Неделя', 'Месяц', 'Год']} />
      </div>
      <Filter />
    </div>
  );
};

export default CallsHeader;
