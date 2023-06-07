import { Link, useLocation } from 'react-router-dom';
import styles from './menuLink.module.css';
import { FC, ReactNode, useEffect, useState } from 'react';

interface IMenuLink {
  title: string;
  url: string;
  icon: ReactNode;
}

const MenuLink: FC<IMenuLink> = ({ title, url, icon }) => {
  const { pathname } = useLocation();
  const [state, setState] = useState(pathname === url);
  useEffect(() => {
    setState(pathname === url);
  }, [pathname, url]);
  return (
    <Link to={url} className={styles.container + ' ' + `${state && styles.container_active}`}>
      <div className={styles.iconContainer}>{icon}</div>
      <p className={styles.title}>{title}</p>
      {state && <div className={styles.activeIcon}></div>}
    </Link>
  );
};

export default MenuLink;
