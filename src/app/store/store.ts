import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commonReducer from './slices/commonSlice';
import { api } from './api/api';

const reducers = combineReducers({
  commonReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
