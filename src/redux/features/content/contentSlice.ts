import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Content {
  id: string;
  title: string;
  content: string;
}

export interface ContentState {
  contents: Content[];
}

const initialState: ContentState = {
  contents: [],
};

const ContentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    getContent: (state, action: PayloadAction<{ id: string }>) => {
      state.contents.map((content) => {
        if (content.id === action.payload.id) {
          return content;
        }
        return null;
      });
    },
    createContent: (
      state,
      action: PayloadAction<{ id: string; title: string; content: string }>
    ) => {
      state.contents.unshift({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
      });
    },
    deleteContent: (state, action: PayloadAction<{ id: string }>) => {
      state.contents = state.contents.filter(
        (content) => content.id !== action.payload.id
      );
    },
    updateContent: (
      state,
      action: PayloadAction<{ id: string; title: string; content: string }>
    ) => {
      state.contents = state.contents.map((content) =>
        content.id === action.payload.id ? action.payload : content
      );
    },
  },
});

export const { getContent, createContent, deleteContent, updateContent } =
  ContentSlice.actions;
export const contentReducer = ContentSlice.reducer;
