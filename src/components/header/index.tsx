import Calendar from '../calendar';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <Calendar />
        <div></div>
      </div>
    </header>
  );
};

export default Header;
