import { FC } from 'react';
import styles from './call.module.css';

interface IAvatar {
  url: string;
}

const Avatar: FC<IAvatar> = ({ url }) => {
  return (
    <div className={styles.cell}>
      <img src={url} alt="Avatar" className={styles.avatar} />
    </div>
  );
};

export default Avatar;
