import MenuLink from '../menuLink';
import styles from './sideBar.module.css';
import { sideBarConf } from '../../service/sideBarConfig';
import Logo from '../logo';

const SideBar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      {sideBarConf.map(({ title, icon, path }) => (
        <MenuLink title={title} url={path} icon={icon} key={title} />
      ))}
    </div>
  );
};

export default SideBar;
