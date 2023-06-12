import styles from './daySelect.module.css';
import { ReactComponent as CalendarIcon } from '../../../../assets/icon-calendar.svg';
import { ReactComponent as ArrowLeft } from '../../../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../../../assets/arrow-right.svg';
import PopOver from '../../../UI/popover';
import { FC, FormEvent, useRef, useState } from 'react';
import { ISelect } from '../../../select';
import ClickOutSide from '../../../UI/clickOutSide';

const DaySelect: FC<ISelect> = ({ text, items }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(text);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    console.log('e');
    setIsOpen(false);
  };

  const handleChange = (e: FormEvent) => {
    const li = e.target as HTMLLIElement;
    setState(li.textContent as string);
    onClose();
  };

  return (
    <ClickOutSide innerRef={ref} onClose={onClose}>
      <div className={styles.mainContainer} ref={ref}>
        <div className={styles.container}>
          <div className={styles.iconWrapper}>
            <ArrowLeft width="6" height="10" />
          </div>
          <button className={styles.wrapper} onClick={handleClick}>
            <div className={styles.iconWrapper}>
              <CalendarIcon width="16" height="18" />
            </div>
            <span>{state}</span>
          </button>
          <div className={styles.iconWrapper}>
            <ArrowRight width="6" height="10" />
          </div>
        </div>
        {isOpen && (
          <PopOver>
            <ul className={styles.dropContainer}>
              <li
                className={styles.dropItem + ' ' + styles.dropItem_position_first}
                onClick={handleChange}
              >
                {text}
              </li>
              {(items as string[])?.map((el) => (
                <li className={styles.dropItem} key={el} onClick={handleChange}>
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

export default DaySelect;
