import styles from './calls.module.css';
import CallsHeader from '../../components/callsPage/callsHeader';
import CallsTable from '../../components/callsTable';
import { callsAPI } from '../../store/api/callsService';

const Calls = () => {
  const { data: callsList } = callsAPI.useFetchAllCallsQuery('');

  return (
    <div className={styles.container}>
      <CallsHeader />
      <CallsTable callsList={callsList?.results} />
    </div>
  );
};

export default Calls;
