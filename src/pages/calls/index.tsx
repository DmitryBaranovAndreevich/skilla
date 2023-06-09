import { useState } from 'react';
import styles from './calls.module.css';
import CallsHeader from '../../components/callsPage/callsHeader';
import CallsTable from '../../components/callsTable';
import { callsAPI } from '../../store/api/callsService';
import { TCallItem } from '../../service/mockCallItem';

const Calls = () => {
  const [state, setState] = useState(false);
  const { data: callsList, isLoading } = callsAPI.useFetchAllCallsQuery('');
  return (
    <div className={styles.container}>
      <CallsHeader />
      <CallsTable callsList={callsList?.results} />
    </div>
  );
};

export default Calls;
