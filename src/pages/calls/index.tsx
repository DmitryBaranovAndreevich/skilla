import { useState } from 'react';
import styles from './calls.module.css';
import CallsHeader from '../../components/callsPage/callsHeader';
import CallsTable from '../../components/callsTable';

const Calls = () => {
  const [state, setState] = useState(false);
  return (
    <div className={styles.container}>
      <CallsHeader />
      <CallsTable callsList={[]} />
    </div>
  );
};

export default Calls;
