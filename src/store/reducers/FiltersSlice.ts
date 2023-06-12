import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IFilterState {
  isResetClick: boolean;
  activeFilters: { name: string; value: string }[];
}

const initialState: IFilterState = {
  isResetClick: true,
  activeFilters: [],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    resetFilters(state) {
      state.isResetClick = !state.isResetClick;
      state.activeFilters = initialState.activeFilters;
    },

    setActiveFilters(state, action: PayloadAction<{ name: string; value: string }>) {
      let result: { name: string; value: string }[] = [];
      if (action.payload.value === 'default')
        result = state.activeFilters.filter((el) => el.name !== action.payload.name);
      else {
        const isContain = state.activeFilters.some((el) => el.name === action.payload.name);
        result = isContain
          ? (state.activeFilters.map((el) => {
              if (el.name === action.payload.name) return action.payload;
              else return el;
            }) as { name: string; value: string }[])
          : [...state.activeFilters, action.payload];
      }

      state.activeFilters = result;
    },
  },
});

export default filtersSlice.reducer;
