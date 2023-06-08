import { useState } from 'react';
import styles from './calls.module.css';
import CallsHeader from '../../components/callsPage/callsHeader';

const Calls = () => {
  const [state, setState] = useState(false);
  return (
    <div className={styles.container}>
      <CallsHeader />
    </div>
  );
};

export default Calls;
