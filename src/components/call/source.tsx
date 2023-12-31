import { FC } from 'react';
import styles from './call.module.css';

interface ISource {
  source: string;
}

const Source: FC<ISource> = ({ source }) => <p className={styles.cell}>{source || 'Yandex'}</p>;

export default Source;
