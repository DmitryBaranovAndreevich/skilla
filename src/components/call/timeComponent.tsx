import { FC } from 'react';
import styles from './call.module.css';

interface ITimeComponent {
  time: string;
}

const TimeComponent: FC<ITimeComponent> = ({ time }) => {
  const parseDate = (date: number) => (date < 10 ? `0${date}` : date);
  const date = new Date(time);
  const minutes = parseDate(date.getMinutes());
  const seconds = parseDate(date.getSeconds());
  return <p className={styles.cell}>{`${minutes} : ${seconds}`}</p>;
};

export default TimeComponent;
