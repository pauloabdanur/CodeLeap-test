import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { userNameReducer } from './features/userName/userNameSlice';
import { postReducer } from './features/post/postSlice';

const store = configureStore({
  reducer: {
    username: userNameReducer,
    post: postReducer,
  },
});

export default store;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
