import MenuLink from '../menuLink';
import styles from './sideBar.module.css';
import { ReactComponent as TestIcon } from '../../assets/sideBar/book-icon.svg';

const SideBar = () => {
  return (
    <div className={styles.container}>
      <p>SideBAr</p>
      <MenuLink title={'Звонки'} url={'/calls'} icon={<TestIcon width="18" height="18" />} />
    </div>
  );
};

export default SideBar;
