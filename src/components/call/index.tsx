import { FC } from 'react';
import { TCallItem } from '../../service/mockCallItem';
import styles from './call.module.css';
import CallType from './callType';
import TimeComponent from './timeComponent';
import Avatar from './avatar';
import CallNumber from './callNumber';
import Source from './source';
import CallTime from './callTime';
import Estimation from './estimation';

const Call: FC<TCallItem> = ({ in_out, date, person_avatar, partner_data, source, time }) => {
  return (
    <div className={styles.container}>
      <CallType type={in_out} />
      <TimeComponent time={date} />
      <Avatar url={person_avatar} />
      <CallNumber number={partner_data.phone} />
      <Source source={source} />
      <Estimation />
      <CallTime time={time} />
    </div>
  );
};

export default Call;
