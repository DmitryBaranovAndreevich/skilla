import { FC } from 'react';
import styles from './line.module.css';

interface ILine {
  persent: string;
  color: string;
}

const Line: FC<ILine> = ({ persent, color }) => {
  const style = { '--size': persent, '--color-dark': color } as React.CSSProperties;
  return <div className={styles.line} style={style}></div>;
};

export default Line;
