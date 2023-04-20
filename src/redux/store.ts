import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './features/post/postSlice';

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
