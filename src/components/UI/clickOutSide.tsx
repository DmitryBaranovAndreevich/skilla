import { FC, ReactNode, useEffect } from 'react';

interface IClickOutSide {
  innerRef: React.RefObject<HTMLElement>;
  onClose: () => void;
  children: ReactNode;
}

const ClickOutSide: FC<IClickOutSide> = ({ innerRef, onClose, children }) => {
  useEffect(() => {
    const clickOutSide = (e: MouseEvent) => {
      if (!innerRef.current) return;
      const el = e.target as HTMLElement;
      if (!innerRef.current.contains(el)) onClose();
    };

    document.addEventListener('click', clickOutSide);

    return () => {
      document.removeEventListener('click', clickOutSide);
    };
  }, [onClose]);

  return <>{children}</>;
};

export default ClickOutSide;
