import styles from './calls.module.css';
import CallsHeader from '../../components/callsPage/callsHeader';
import CallsTable from '../../components/callsTable';
import { callsAPI } from '../../store/api/callsService';
import { useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';

const Calls = () => {
  const { url } = useAppSelector((state) => state.urlReducer);
  console.log(url);
  const { data: callsList, refetch } = callsAPI.useFetchAllCallsQuery(url ? `?${url}` : '');

  useEffect(() => {
    console.log('ref');
    refetch();
  }, [url]);

  return (
    <div className={styles.container}>
      <CallsHeader />
      <CallsTable callsList={callsList?.results} />
    </div>
  );
};

export default Calls;
