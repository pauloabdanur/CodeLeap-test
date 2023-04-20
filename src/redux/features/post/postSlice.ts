import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { NewPostType, PostType } from '../../../types';

export interface PostState {
  posts: PostType[];
  status: 'idle' | 'loading' | 'complete' | 'failed';
  error: string | null | undefined;
}

const initialState: PostState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (offset: number) => {
    try {
      const response = await axios
        .get(`https://dev.codeleap.co.uk/careers/?limit=10&offset=${offset}`)
        .then((res) => res.data)
        .then((res) => res.results);
      return response;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (post: NewPostType) => {
    try {
      const response = await axios.post(
        'https://dev.codeleap.co.uk/careers/',
        {
          username: post.username,
          title: post.title,
          content: post.content,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      return response.data;
    } catch (err: any) {
      console.log(err.message);
      return err;
    }
  }
);

const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<PostType[]>) => {
          state.status = 'complete';
          state.posts = action.payload;
        }
      )
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(
        addNewPost.fulfilled,
        (state, action: PayloadAction<PostType>) => {
          state.status = 'idle';
          state.posts.unshift(action.payload);
        }
      );
  },
});

// export const { createPost } = PostSlice.actions;
export const postReducer = PostSlice.reducer;
