import { FC } from 'react';
import styles from './call.module.css';
import convertNumber from '../../service/convertNumber';

interface ICallNumber {
  number: string;
}
const CallNumber: FC<ICallNumber> = ({ number }) => {
  return (
    <p className={styles.cell + ' ' + styles.cell_position_start + ' ' + styles.cell_padding_small}>
      {convertNumber(number)}
    </p>
  );
};

export default CallNumber;
