import { FC } from 'react';
import styles from './callsTable.module.css';
import Call from '../call';
import { TCallItem } from '../../service/mockCallItem';
import HeaderTable from '../call/headerTable';
import Spinner from '../spinner/spinner';

interface ICallsTable {
  callsList?: TCallItem[];
  isLoading?: boolean;
}

const CallsTable: FC<ICallsTable> = ({ callsList, isLoading = false }) => {
  return (
    <div className={styles.container}>
      <HeaderTable />
      {isLoading ? <Spinner /> : callsList && callsList.map((el) => <Call {...el} key={el.id} />)}
    </div>
  );
};

export default CallsTable;
