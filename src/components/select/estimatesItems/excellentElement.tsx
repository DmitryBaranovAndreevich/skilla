import { FC, FormEvent } from 'react';
import styles from './estimatesItems.module.css';

interface INodeElement {
  onClick?: (e: FormEvent) => void;
}

const ExcellentElement: FC<INodeElement> = ({ onClick }) => {
  return (
    <p className={styles.excellentElement__container} onClick={onClick}>
      Отлично
    </p>
  );
};

export default ExcellentElement;
