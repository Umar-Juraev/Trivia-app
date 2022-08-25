import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { quizApi } from './endpoints/quiz';
import filtersSlice from './slices/quiz';

const store = configureStore({
  reducer:{
    [quizApi.reducerPath]:quizApi.reducer,
    filters: filtersSlice.reducer,
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware()
  .concat(quizApi.middleware)
})
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
