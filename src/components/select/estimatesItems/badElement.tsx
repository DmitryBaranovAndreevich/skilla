import { FC, FormEvent } from 'react';
import styles from './estimatesItems.module.css';

interface INodeElement {
  onClick?: (e: FormEvent) => void;
}

const BadElement: FC<INodeElement> = ({ onClick }) => {
  return (
    <p className={styles.badElement__container} onClick={onClick}>
      Плохо
    </p>
  );
};

export default BadElement;
