import { FC } from 'react';
import styles from './call.module.css';
import parseDate from '../../service/parseDate';
import OnPlayerClick from '../onPlayerClick';

interface ICallItem {
  time: string;
  record?: string;
  partner?: string;
  isHover?: boolean;
}

const CallTime: FC<ICallItem> = ({ time, isHover, record, partner }) => {
  const minutes = parseDate(Math.floor(Number(time) / 60));
  const seconds = parseDate(Number(time) % 60);
  return (
    <div className={styles.cell + ' ' + styles.cell_disp_flex}>
      {isHover && record && partner ? (
        <OnPlayerClick record={record} partner={partner} />
      ) : (
        `${minutes} : ${seconds}`
      )}
    </div>
  );
};

export default CallTime;
