import { FC } from 'react';
import styles from './call.module.css';
import parseDate from '../../service/parseDate';

interface ICallItem {
  time: string;
}

const CallTime: FC<ICallItem> = ({ time }) => {
  const minutes = parseDate(Math.floor(Number(time) / 60));
  const seconds = parseDate(Number(time) % 60);
  return <p className={styles.cell}>{`${minutes} : ${seconds}`}</p>;
};

export default CallTime;
