import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { userNameReducer } from './features/userName/userNameSlice';
import { contentReducer } from './features/content/contentSlice';

const store = configureStore({
  reducer: {
    username: userNameReducer,
    createContent: contentReducer,
  },
});

export default store;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
