import { FC, FormEvent } from 'react';
import styles from './estimatesItems.module.css';

interface INodeElement {
  onClick?: (e: FormEvent) => void;
}

const TwoDot: FC<INodeElement> = ({ onClick }) => {
  return (
    <div className={styles.dots__container} onClick={onClick}>
      <div className={styles.twoDots__dot}></div>
      <div className={styles.twoDots__dot}></div>
    </div>
  );
};

export default TwoDot;
