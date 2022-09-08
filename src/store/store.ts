import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { quizApi } from './endpoints/quiz';
import changeRoute from './slices/changeRoute';



const store = configureStore({
  reducer:{
    [quizApi.reducerPath]:quizApi.reducer,
    changeRoute: changeRoute.reducer,
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware({serializableCheck:false})
  .concat(quizApi.middleware)
})
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
