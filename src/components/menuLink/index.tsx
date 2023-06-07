import { Link } from 'react-router-dom';
import styles from './menuLink.module.css';
import { FC, ReactNode } from 'react';

interface IMenuLink {
  title: string;
  url: string;
  icon: ReactNode;
}

const MenuLink: FC<IMenuLink> = ({ title, url, icon }) => {
  return (
    <Link to={url} className={styles.container}>
      <div className={styles.iconContainer}>{icon}</div>
      <p className={styles.title}>{title}</p>
      <div className={styles.activeIcon}></div>
    </Link>
  );
};

export default MenuLink;
