import { FC } from 'react';
import styles from './progress.module.css';
import { GreenLine, RedLine, Yellowline } from '../line/colorLines';
import LineColor from '../../service/colorTypes';

interface IProgress {
  title: string;
  counter: string;
  persent: string;
  color: LineColor;
}

const Progress: FC<IProgress> = ({ title, counter, persent, color }) => {
  return (
    <div>
      <div className={styles.textContainer}>
        <span className={styles.title}>{`${title}`}</span>
        {(() => {
          switch (color) {
            case 'green':
              return (
                <span className={styles.counter} style={{ color: '#00A775' }}>
                  {counter}
                </span>
              );
            case 'yellow':
              return (
                <span className={styles.counter} style={{ color: '#FFB800' }}>
                  {counter}
                </span>
              );
            case 'red':
              return (
                <span className={styles.counter} style={{ color: '#EA1A4F' }}>
                  {counter}
                </span>
              );
          }
        })()}
      </div>
      {(() => {
        switch (color) {
          case 'green':
            return <GreenLine persent={persent} />;
          case 'yellow':
            return <Yellowline persent={persent} />;
          case 'red':
            return <RedLine persent={persent} />;
        }
      })()}
    </div>
  );
};

export default Progress;
