import { FC } from 'react';
import { TCallItem } from '../../service/mockCallItem';
import styles from './call.module.css';

const Call: FC<TCallItem> = ({ in_out, date, person_avatar, to_number, source }) => {
  return (
    <div className={styles.container}>
      <p className={styles.cell}>Тип</p>
      <p className={styles.cell}>Время</p>
      <p className={styles.cell}>Сотрудник</p>
      <p
        className={styles.cell + ' ' + styles.cell_position_start + ' ' + styles.cell_padding_small}
      >
        Звонок
      </p>
      <p className={styles.cell}>Источник</p>
      <p className={styles.cell + ' ' + styles.cell_position_start + ' ' + styles.cell_padding_big}>
        Оценка
      </p>
      <p className={styles.cell}>Длительность</p>
    </div>
  );
};

export default Call;
