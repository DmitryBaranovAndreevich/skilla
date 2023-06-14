import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { setURLParams } from '../../service/setUrlParams';

export interface IParams {
  date_start: string;
  date_end: string;
  in_out: string;
  order: string;
}

interface IInitialState {
  params: IParams;
  url: string;
}

export type TInOutPayload = Pick<IParams, 'in_out'>;

export type TOrderPayload = Pick<IParams, 'order'>;

const initialState: IInitialState = {
  params: {
    date_end: '',
    date_start: '',
    in_out: '',
    order: '',
  },
  url: '',
};

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    setDate(state, action: PayloadAction<{ date_start: string; date_end: string }>) {
      state.params.date_start = action.payload.date_start;
      state.params.date_end = action.payload.date_end;
      state.url = setURLParams(state.params);
    },
    setInOutCall(state, action: PayloadAction<TInOutPayload>) {
      state.params.in_out = action.payload.in_out;
      state.url = setURLParams(state.params);
    },
    removeInOutCall(state) {
      state.params.in_out = initialState.params.in_out;
      state.url = setURLParams(state.params);
    },
    setOrder(state, action: PayloadAction<TOrderPayload>) {
      state.params.order = action.payload.order;
      state.url = setURLParams(state.params);
    },
    removeOrder(state) {
      state.params.order = initialState.params.order;
      state.url = setURLParams(state.params);
    },
    removeParams(state) {
      state.params = initialState.params;
      state.url = setURLParams(state.params);
    },
  },
});

export default urlSlice.reducer;
