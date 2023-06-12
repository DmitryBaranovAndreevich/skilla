import { FC, FormEvent } from 'react';
import styles from './estimatesItems.module.css';

interface INodeElement {
  onClick?: (e: FormEvent) => void;
}

const ThreeDots: FC<INodeElement> = ({ onClick }) => {
  return (
    <div className={styles.dots__container}>
      <div className={styles.threeDots__dot} onClick={onClick}>
        3
      </div>
      <div className={styles.threeDots__dot}></div>
      <div className={styles.threeDots__dot}></div>
    </div>
  );
};

export default ThreeDots;
