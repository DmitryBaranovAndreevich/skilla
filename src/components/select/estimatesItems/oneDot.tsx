import { FC, FormEvent } from 'react';
import styles from './estimatesItems.module.css';

interface INodeElement {
  onClick?: (e: FormEvent) => void;
}

const OneDot: FC<INodeElement> = ({ onClick }) => {
  return (
    <div className={styles.dots__container}>
      <div className={styles.dot} onClick={onClick}>
        1
      </div>
    </div>
  );
};

export default OneDot;
