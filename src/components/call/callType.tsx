import { FC } from 'react';
import styles from './call.module.css';
import { ReactComponent as CallInIcon } from '../../assets/callIn-icon.svg';
import { ReactComponent as CallOutIcon } from '../../assets/callOut.svg';

interface ICallType {
  type: string;
}
const CallType: FC<ICallType> = ({ type }) => {
  return (
    <p className={styles.cell}>
      {(() => {
        switch (String(type)) {
          case '0':
            return <CallInIcon />;
          case '1':
            return <CallOutIcon />;
          default:
            return type;
        }
      })()}
    </p>
  );
};

export default CallType;
