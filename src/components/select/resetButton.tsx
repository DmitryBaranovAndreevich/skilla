import { FC } from 'react';
import styles from './select.module.css';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';
import { filtersSlice } from '../../store/reducers/FiltersSlice';
import { useAppDispatch } from '../../hooks/redux';

interface IResetButton {
  title: string;
}
const ResetButton: FC<IResetButton> = ({ title }) => {
  const { resetFilters } = filtersSlice.actions;
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(resetFilters());
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      {title}
      <CloseIcon width="9" height="9" />
    </button>
  );
};

export default ResetButton;
