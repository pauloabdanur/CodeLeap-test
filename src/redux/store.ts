import { configureStore } from '@reduxjs/toolkit';
import { userNameReducer } from './features/userName/userNameSlice';
import { postReducer } from './features/post/postSlice';

const store = configureStore({
  reducer: {
    username: userNameReducer,
    posts: postReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
