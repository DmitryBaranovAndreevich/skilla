import { FC, useEffect, useRef, useState } from 'react';
import AudioPlayer from '../audioPlayer';
import { RecordApi } from '../../store/api/recordApi';
import styles from './onPlayerClick.module.css';

interface IOnPlayerClick {
  record: string;
  partner: string;
}

const OnPlayerClick: FC<IOnPlayerClick> = ({ record, partner }) => {
  const [rec, setRec] = useState('');
  const loadRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function getData() {
      if (loadRef.current) return;
      const data = await RecordApi.getRecord({
        recordId: record,
        partnerId: partner,
      });
      setRec(URL.createObjectURL(data));
      loadRef.current = true;
    }
    ref.current?.addEventListener('click', getData);
    // eslint-disable-next-line
    return () => ref.current?.removeEventListener('click', getData);
  }, [record, partner]);

  return (
    <div ref={ref} className={styles.container}>
      <AudioPlayer track={rec} isLoad={loadRef.current} />
    </div>
  );
};

export default OnPlayerClick;
