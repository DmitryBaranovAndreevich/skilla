import styles from './input.module.css';
import { ReactComponent as SearchIcon } from '../../../assets/search-icon.svg';
import { ReactComponent as CloseIcon } from '../../../assets/close-icon.svg';
import { FormEvent, useEffect, useState } from 'react';

const Input = () => {
  const [state, setState] = useState('');
  const [focus, setFocus] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(state.length > 0);
  }, [state]);

  const hadleChange = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setState(input.value);
  };

  const handleCloseButtonClick = () => {
    setState('');
  };

  return (
    <div className={styles.container + ' ' + `${focus && styles.container_active}`}>
      <div className={styles.searchIconContainer}>
        <SearchIcon width="16" height="16" />
      </div>
      <input
        value={state}
        className={styles.input}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        onChange={hadleChange}
        placeholder="Поиск по звонкам"
      />
      <span className={styles.errorMessage}>errormessage</span>
      <button
        className={styles.closeButton + ' ' + `${visible && styles.closeButton_active}`}
        onClick={handleCloseButtonClick}
      >
        <CloseIcon width="14" height="14" />
      </button>
    </div>
  );
};

export default Input;
