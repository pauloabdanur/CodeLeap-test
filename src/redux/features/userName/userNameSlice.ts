import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserNameState {
  name: string;
}

const initialState: UserNameState = {
  name: '',
};

const userNameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setUsername } = userNameSlice.actions;
export const userNameReducer = userNameSlice.reducer;
