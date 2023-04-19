import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface IPost {
  id: string;
  username: string;
  title: string;
  content: string;
}

export interface PostState {
  posts: IPost[];
}

const initialState: PostState = {
  posts: [],
};

const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    createPost: (
      state,
      action: PayloadAction<{
        id: string;
        username: string;
        title: string;
        content: string;
      }>
    ) => {
      state.posts.unshift({
        id: action.payload.id,
        username: action.payload.username,
        title: action.payload.title,
        content: action.payload.content,
      });
    },
    deletePost: (state, action: PayloadAction<{ id: string }>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    updatePost: (
      state,
      action: PayloadAction<{
        id: string;
        username: string;
        title: string;
        content: string;
      }>
    ) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
  },
});

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//   const response = await client.get('https://dev.codeleap.co.uk/careers/')
//   return response.data
// })

export const { createPost, deletePost, updatePost } = PostSlice.actions;
export const postReducer = PostSlice.reducer;
