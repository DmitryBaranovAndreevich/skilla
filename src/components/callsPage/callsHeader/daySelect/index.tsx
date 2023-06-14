import styles from './daySelect.module.css';
import { ReactComponent as CalendarIcon } from '../../../../assets/icon-calendar.svg';
import { ReactComponent as ArrowLeft } from '../../../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../../../assets/arrow-right.svg';
import PopOver from '../../../UI/popover';
import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { ISelect } from '../../../select';
import ClickOutSide from '../../../UI/clickOutSide';
import { useAppDispatch } from '../../../../hooks/redux';
import { urlSlice } from '../../../../store/reducers/UrlSlice';
import getDate from '../../../../service/getDate';

const DaySelect: FC<ISelect> = ({ text, items }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(text);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { setDate } = urlSlice.actions;
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const date = new Date();
    switch (state) {
      case '3 дня': {
        const start = new Date(new Date().setDate(new Date().getDate() - 3));
        dispatch(setDate({ date_start: getDate(start), date_end: getDate(date) }));
        break;
      }
      case 'Неделя': {
        const start = new Date(new Date().setDate(new Date().getDate() - 7));
        dispatch(setDate({ date_start: getDate(start), date_end: getDate(date) }));
        break;
      }
      case 'Месяц': {
        const start = new Date(new Date().setDate(new Date().getDate() - 30));
        dispatch(setDate({ date_start: getDate(start), date_end: getDate(date) }));
        break;
      }
      case 'Год': {
        const start = new Date(new Date().setDate(new Date().getDate() - 365));
        dispatch(setDate({ date_start: getDate(start), date_end: getDate(date) }));
        break;
      }
    }
  }, [state]);

  const onClose = () => {
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
