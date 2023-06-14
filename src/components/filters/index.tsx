import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useForm from '../../hooks/useForm';
import { mockStaffList } from '../../service/mockCallItem';
import Input from '../UI/input';
import Select, { SelectType } from '../select';
import ResetButton from '../select/resetButton';
import styles from './filter.module.css';
import { TOrderPayload, IParams, urlSlice, TInOutPayload } from '../../store/reducers/UrlSlice';
import { convertInOutValues, converOrderValues } from '../../service/convertValues';

const Filter = () => {
  const { activeFilters } = useAppSelector((state) => state.filtersReduser);
  const dispatch = useAppDispatch();
  const { setInOutCall, setOrder, removeInOutCall, removeOrder } = urlSlice.actions;

  const initState = {
    order: 'Отсортировать',
    in_out: 'Все звонки',
    date_start: '',
    date_end: '',
  };

  const { state, handleChange } = useForm<IParams>(initState);

  useEffect(() => {
    const payload =
      state.order !== initState.order ? { order: converOrderValues[state.order] } : '';
    if (payload) dispatch(setOrder(payload as TOrderPayload));
    else dispatch(removeOrder());
  }, [state.order]);

  useEffect(() => {
    const payload =
      state.in_out !== initState.in_out ? { in_out: convertInOutValues[state.in_out] } : '';
    console.log(payload);
    if (payload) dispatch(setInOutCall(payload as TInOutPayload));
    else dispatch(removeInOutCall());
  }, [state.in_out]);

  return (
    <div className={styles.container}>
      <Input />
      <div className={styles.selectContainer}>
        {activeFilters.length !== 0 && <ResetButton title={'Сбросить фильтры'} />}
        <Select
          name="order"
          onInput={handleChange}
          text={'Отсортировать'}
          items={['По возрастанию', 'По убыванию']}
          type={SelectType.text}
        />
        <Select text={'Все сотрудники'} items={mockStaffList} type={SelectType.textWhithIcon} />
        <Select
          text={'Все звонки'}
          items={['Входящие', 'Исходящие']}
          type={SelectType.text}
          name="in_out"
          onInput={handleChange}
        />
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
