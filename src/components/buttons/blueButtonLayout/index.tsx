import { FC, ReactNode } from 'react';
import Button from '../../UI/button';
import styles from './blueButtonLayout.module.css';

interface BluButtonLayout {
  children: string;
  icon?: ReactNode;
}

const BluButtonLayout: FC<BluButtonLayout> = ({ children, icon, ...props }) => {
  return (
    <div className={styles.container}>
      <Button addClass={styles.button} text={children} {...props} icon={icon} />
    </div>
  );
};

export default BluButtonLayout;
