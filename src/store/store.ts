import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { callsAPI } from './api/callsService';
const rootReduser = combineReducers({
  [callsAPI.reducerPath]: callsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(callsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
