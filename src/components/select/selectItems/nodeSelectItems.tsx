import { FC, FormEvent } from 'react';
import styles from '../select.module.css';
import BadElement from '../estimatesItems/badElement';
import GutElement from '../estimatesItems/gutElement';
import ExcellentElement from '../estimatesItems/excellentElement';
import OneDot from '../estimatesItems/oneDot';
import TwoDots from '../estimatesItems/twoDots';
import ThreeDots from '../estimatesItems/threeDots';

interface ITextSelectItems {
  firstElement: string;
  onClick: (e: FormEvent) => void;
}

const NodeSelectItems: FC<ITextSelectItems> = ({ firstElement, onClick }) => {
  return (
    <ul className={styles.dropContainer}>
      <li className={styles.dropItem + ' ' + styles.dropItem_position_first} onClick={onClick}>
        {firstElement}
      </li>
      <li className={styles.dropItem} onClick={onClick}>
        Распознать
      </li>
      <li className={styles.dropItem} onClick={onClick}>
        Скрипт не использован
      </li>
      <li className={styles.dropItem} onClick={onClick}>
        <BadElement onClick={onClick} />
      </li>
      <li className={styles.dropItem} onClick={onClick}>
        <GutElement onClick={onClick} />
      </li>
      <li className={styles.dropItem} onClick={onClick}>
        <ExcellentElement onClick={onClick} />
      </li>
      <li className={styles.dropItem + ' ' + styles.dropItem_padding_big} onClick={onClick}>
        <OneDot onClick={onClick} />
      </li>
      <li className={styles.dropItem + ' ' + styles.dropItem_padding_big} onClick={onClick}>
        <TwoDots onClick={onClick} />
      </li>
      <li className={styles.dropItem + ' ' + styles.dropItem_padding_big} onClick={onClick}>
        <ThreeDots onClick={onClick} />
      </li>
    </ul>
  );
};
export default NodeSelectItems;
