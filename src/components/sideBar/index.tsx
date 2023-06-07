import MenuLink from '../menuLink';
import styles from './sideBar.module.css';
import { sideBarConf } from '../../service/sideBarConfig';
import Logo from '../logo';
import AddButton from '../buttons/addButton';
import PayButton from '../buttons/payButton';

const SideBar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.linksContainer}>
        {sideBarConf.map(({ title, icon, path }) => (
          <MenuLink title={title} url={path} icon={icon} key={title} />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <AddButton />
        <PayButton />
      </div>
    </div>
  );
};

export default SideBar;
