import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { PostType } from '../../../types';

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

export const addNewPost = createAsyncThunk('posts/addNewPost', async () => {
  try {
    const response = await axios.post('https://dev.codeleap.co.uk/careers/');
    console.log('response post');
    console.log(response.data);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
});

const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost: {
      reducer(state, action: PayloadAction<PostType>) {
        state.posts.unshift(action.payload);
      },
      prepare(id, username, created_datetime, title, content) {
        return {
          payload: {
            id,
            username,
            created_datetime,
            title,
            content,
          },
        };
      },
    },
    deletePost: (state, action: PayloadAction<{ id: number }>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'complete';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        console.log('add post complete');
        console.log(action.payload);
        state.posts.unshift(action.payload);
      });
  },
});

export const { createPost } = PostSlice.actions;
export const postReducer = PostSlice.reducer;
