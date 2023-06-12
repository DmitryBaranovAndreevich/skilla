import { FC, FormEvent } from 'react';
import styles from './estimatesItems.module.css';

interface INodeElement {
  onClick?: (e: FormEvent) => void;
}

const GutElement: FC<INodeElement> = ({ onClick }) => {
  return (
    <p className={styles.gutElement__container} onClick={onClick}>
      Хорошо
    </p>
  );
};

export default GutElement;
