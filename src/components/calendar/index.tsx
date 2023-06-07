import useDate from '../../hooks/useDate';
import styles from './calendar.module.css';

const Calendar = () => {
  const { date, day, month } = useDate();
  return (
    <div className={styles.container}>
      <span className={styles.date}>{`${day}, ${date} ${month}`}</span>
    </div>
  );
};

export default Calendar;
