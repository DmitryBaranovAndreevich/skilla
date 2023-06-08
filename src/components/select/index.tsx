import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import PopOver from '../UI/popover';
import styles from './select.module.css';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { ReactComponent as ArrowIconUp } from '../../assets/arrow-up-icon.svg';
import ClickOutSide from '../UI/clickOutSide';

export interface ISelect {
  text: string;
  items?: string[];
}

const Select: FC<ISelect> = ({ text, items }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <ClickOutSide innerRef={ref} onClose={onClose}>
      <div className={styles.container} ref={ref}>
        <button className={styles.button} onClick={handleClick}>
          {text}
          {isOpen ? <ArrowIconUp width="10" height="8" /> : <ArrowIcon width="10" height="8" />}
        </button>
        {isOpen && (
          <PopOver>
            <ul className={styles.dropContainer}>
              <li className={styles.dropItem + ' ' + styles.dropItem_position_first}>{text}</li>
              {items?.map((el) => (
                <li className={styles.dropItem} key={el}>
                  {el}
                </li>
              ))}
            </ul>
          </PopOver>
        )}
      </div>
    </ClickOutSide>
  );
};

export default Select;
