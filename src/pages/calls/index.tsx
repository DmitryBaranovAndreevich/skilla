import { useEffect, useState } from 'react';
import styles from './calls.module.css';
import CallsHeader from '../../components/callsPage/callsHeader';
import CallsTable from '../../components/callsTable';
import { callsAPI } from '../../store/api/callsService';
import { TCallItem } from '../../service/mockCallItem';
import { RecordApi } from '../../store/api/recordApi';
import AudioPlayer from '../../components/audioPlayer';

const Calls = () => {
  const [rec, setRec] = useState('');
  const [state, setState] = useState(false);
  const { data: callsList } = callsAPI.useFetchAllCallsQuery('');
  useEffect(() => {
    async function getData() {
      const data = await RecordApi.getRecord({
        recordId: 'MToxMDA2NzYxNToxNDMwMDM3NzExNzow',
        partnerId: '578',
      });
      setRec(URL.createObjectURL(data));
    }
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <CallsHeader />
      <CallsTable callsList={callsList?.results} />
      {rec && <AudioPlayer track={rec} />}
    </div>
  );
};

export default Calls;
