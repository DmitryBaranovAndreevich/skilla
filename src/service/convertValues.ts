interface IObj {
  [key: string]: string;
}

export const converOrderValues: IObj = {
  'По возрастанию': 'ASC',
  'По убыванию': 'DESC',
};

export const convertInOutValues: IObj = {
  Входящие: '1',
  Исходящие: '0',
};
