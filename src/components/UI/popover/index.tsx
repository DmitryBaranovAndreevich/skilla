import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

interface IPortal {
  children: ReactNode;
  element: HTMLDivElement;
}

const Child: FC<IPortal> = ({ children, element }) => {
  return ReactDOM.createPortal(<>{children}</>, element);
};

interface IPopOver {
  children: ReactNode;
}

const PopOver: FC<IPopOver> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    setElement(ref.current);
  }, []);

  return (
    <div style={{ zIndex: 10 }} ref={ref}>
      {element && <Child element={element}>{children}</Child>}
    </div>
  );
};

export default PopOver;
