import { useState } from 'react';
import { DateConfig, MonthConfig } from '../service/dateConfig';

const useDate = () => {
  const [today] = useState(new Date());

  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();

  return { date, day: DateConfig[day], month: MonthConfig[month] };
};

export default useDate;
