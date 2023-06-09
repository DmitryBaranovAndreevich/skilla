import { FC } from 'react';
import styles from './call.module.css';

interface ICallItem {
  time: string;
}

const CallTime: FC<ICallItem> = ({ time }) => <p className={styles.cell}>{time}</p>;

export default CallTime;
