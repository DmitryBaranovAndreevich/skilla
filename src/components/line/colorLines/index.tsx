import Line from '..';

export const RedLine = ({ persent }: { persent: string }) => {
  return <Line persent={persent} color={'#EA1A4F'} />;
};

export const Yellowline = ({ persent }: { persent: string }) => {
  return <Line persent={persent} color={'#FFD500'} />;
};

export const GreenLine = ({ persent }: { persent: string }) => {
  return <Line persent={persent} color={'#28A879'} />;
};
