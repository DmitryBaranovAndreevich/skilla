import { FC, ReactNode } from 'react';
import styles from './button.module.css';

interface IButton {
  addClass: string;
  text: string;
  icon?: ReactNode;
}

const Button: FC<IButton> = ({ text, addClass, icon, ...props }) => {
  return (
    <button className={addClass} {...props}>
      <p className={styles.text}>{text}</p>
      {icon}
    </button>
  );
};

export default Button;
