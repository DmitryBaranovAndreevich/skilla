import { FC, FormEvent } from 'react';
import styles from '../select.module.css';

export interface IItem {
  image: string;
  text: string;
}

interface IIconWithTextSelectIcons {
  items: IItem[];
  firstElement: string;
  onClick: (e: FormEvent) => void;
}
const IconWithTextSelectIcons: FC<IIconWithTextSelectIcons> = ({
  firstElement,
  items,
  onClick,
}) => {
  return (
    <ul className={styles.dropContainer}>
      <li className={styles.dropItem + ' ' + styles.dropItem_position_first} onClick={onClick}>
        {firstElement}
      </li>
      {items?.map(({ image, text }) => (
        <li
          className={styles.dropItem + ' ' + styles.dropItem_contain_icon}
          key={text}
          onClick={onClick}
        >
          <img className={styles.avatar} src={image} alt="Avatar" />
          {text}
        </li>
      ))}
    </ul>
  );
};

export default IconWithTextSelectIcons;
