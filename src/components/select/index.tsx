import { FC, FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import PopOver from '../UI/popover';
import styles from './select.module.css';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { ReactComponent as ArrowIconUp } from '../../assets/arrow-up-icon.svg';
import ClickOutSide from '../UI/clickOutSide';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filtersSlice } from '../../store/reducers/FiltersSlice';
import TextSelectItems from './selectItems/textSelectItems';
import IconWithTextSelectIcons, { IItem } from './selectItems/iconWithTextSelectIcons';
import NodeSelectItems from './selectItems/nodeSelectItems';
import BadElement from './estimatesItems/badElement';
import GutElement from './estimatesItems/gutElement';
import ExcellentElement from './estimatesItems/excellentElement';
import OneDot from './estimatesItems/oneDot';
import TwoDot from './estimatesItems/twoDots';
import ThreeDots from './estimatesItems/threeDots';

export enum SelectType {
  text = 'text',
  textWhithIcon = 'icon',
  reactNode = 'node',
}

export interface ISelect extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  items?: string[] | IItem[];
  type?: SelectType;
}

const Select: FC<ISelect> = ({ text, items, type = SelectType.text, ...props }) => {
  const { isResetClick } = useAppSelector((state) => state.filtersReduser);
  const { setActiveFilters } = filtersSlice.actions;
  const dispatch = useAppDispatch();
  const [state, setState] = useState(text);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const changeState = (e: FormEvent) => {
    const li = e.target as HTMLLIElement;
    setState(li.textContent as string);
    onClose();
  };

  useEffect(() => {
    const payload =
      state !== text ? { name: text, value: state } : { name: text, value: 'default' };
    dispatch(setActiveFilters(payload));
  }, [state, dispatch, text, setActiveFilters]);

  useEffect(() => {
    setState(text);
  }, [isResetClick, text]);

  useEffect(() => {
    const event = new Event('input', { bubbles: true });
    (inputRef.current as unknown as HTMLElement).dispatchEvent(event);
  }, [state]);

  const callChangeState = useCallback(changeState, [changeState]);

  return (
    <ClickOutSide innerRef={ref} onClose={onClose}>
      <div className={styles.container} ref={ref}>
        <button
          className={styles.button + ' ' + `${state !== text && styles.button_active}`}
          onClick={handleClick}
        >
          {(() => {
            switch (state) {
              case 'Плохо':
                return <BadElement />;

              case 'Хорошо':
                return <GutElement />;

              case 'Отлично':
                return <ExcellentElement />;

              case '1':
                return <OneDot />;

              case '2':
                return <TwoDot />;

              case '3':
                return <ThreeDots />;

              default:
                return state;
            }
          })()}
          {isOpen ? <ArrowIconUp width="10" height="8" /> : <ArrowIcon width="10" height="8" />}
        </button>
        <input
          ref={inputRef}
          type="text"
          value={state}
          className={styles.input}
          readOnly
          {...props}
        />
        {isOpen && (
          <PopOver>
            {(() => {
              switch (type) {
                case SelectType.text:
                  return (
                    <TextSelectItems
                      items={items as string[]}
                      firstElement={text}
                      onClick={callChangeState}
                    />
                  );

                case SelectType.textWhithIcon:
                  return (
                    <IconWithTextSelectIcons
                      items={items as IItem[]}
                      firstElement={text}
                      onClick={callChangeState}
                    />
                  );

                case SelectType.reactNode:
                  return <NodeSelectItems firstElement={'Все оценки'} onClick={callChangeState} />;
              }
            })()}
          </PopOver>
        )}
      </div>
    </ClickOutSide>
  );
};

export default Select;
