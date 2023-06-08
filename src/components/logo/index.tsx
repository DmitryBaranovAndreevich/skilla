import styles from './logo.module.css';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';

const Logo = () => {
  return (
    <div className={styles.container}>
      <LogoIcon width="110" height="28" />
    </div>
  );
};

export default Logo;
