import { FC } from 'react';
import styles from './call.module.css';
import parseDate from '../../service/parseDate';
import AudioPlayer from '../audioPlayer';

interface ICallItem {
  time: string;
  record?: string;
  partner?: string;
  isHover?: boolean;
}

const CallTime: FC<ICallItem> = ({ time, isHover, record, partner }) => {
  console.log(isHover, record, partner);
  const minutes = parseDate(Math.floor(Number(time) / 60));
  const seconds = parseDate(Number(time) % 60);
  return (
    <p className={styles.cell + ' ' + styles.cell_disp_flex}>
      {isHover && record && partner ? <AudioPlayer track={''} /> : `${minutes} : ${seconds}`}
    </p>
  );
};

export default CallTime;
