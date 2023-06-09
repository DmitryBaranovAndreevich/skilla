import { FC } from 'react';
import styles from './callsTable.module.css';
import Call from '../call';
import { mockCallItem } from '../../service/mockCallItem';

interface ICallsTable {
  callsList: [];
}

const CallsTable: FC<ICallsTable> = ({ callsList }) => {
  return (
    <div className={styles.container}>
      <Call {...mockCallItem} />
    </div>
  );
};

export default CallsTable;
