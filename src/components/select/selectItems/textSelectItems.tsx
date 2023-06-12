import { FC, FormEvent } from 'react';
import styles from '../select.module.css';

interface ITextSelectItems {
  items?: string[];
  firstElement: string;
  onClick: (e: FormEvent) => void;
}

const TextSelectItems: FC<ITextSelectItems> = ({ items, firstElement, onClick }) => {
  return (
    <ul className={styles.dropContainer}>
      <li className={styles.dropItem + ' ' + styles.dropItem_position_first} onClick={onClick}>
        {firstElement}
      </li>
      {items?.map((el) => (
        <li className={styles.dropItem} key={el} onClick={onClick}>
          {el}
        </li>
      ))}
    </ul>
  );
};

export default TextSelectItems;
