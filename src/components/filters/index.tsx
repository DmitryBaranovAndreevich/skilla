import { useAppSelector } from '../../hooks/redux';
import { mockStaffList } from '../../service/mockCallItem';
import Input from '../UI/input';
import Select, { SelectType } from '../select';
import ResetButton from '../select/resetButton';
import styles from './filter.module.css';

const Filter = () => {
  const { activeFilters } = useAppSelector((state) => state.filtersReduser);
  return (
    <div className={styles.container}>
      <Input />
      <div className={styles.selectContainer}>
        {activeFilters.length !== 0 && <ResetButton title={'Сбросить фильтры'} />}
        <Select
          text={'Все типы'}
          items={[
            'Все клиенты',
            'Новые клиенты',
            'Все исполнители',
            'Через приложение',
            'Прочие звонки',
          ]}
          type={SelectType.text}
        />
        <Select text={'Все сотрудники'} items={mockStaffList} type={SelectType.textWhithIcon} />
        <Select text={'Все звонки'} items={['Входящие', 'Исходящие']} type={SelectType.text} />
        <Select
          text={'Все источники'}
          items={[
            'Распознать',
            'Скрипт не использован',
            'Цена',
            'Скидка',
            'Предзаказ',
            'Благодарность',
            'Стоп слова',
          ]}
          type={SelectType.text}
        />
        <Select text={'Все оценки'} type={SelectType.reactNode} />
        <Select
          text={'Все ошибки'}
          items={[
            'Распознать',
            'Скрипт не использован',
            'Цена',
            'Скидка',
            'Предзаказ',
            'Благодарность',
            'Стоп слова',
          ]}
        />
      </div>
    </div>
  );
};

export default Filter;
