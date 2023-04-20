import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchPosts } from '../../../actions/fetchPosts';
import { addNewPost } from '../../../actions/addNewPost';
import { updatePost } from '../../../actions/updatePost';
import { deletePost } from '../../../actions/deletePost';

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
      )
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = state.posts.filter(
          (post) => post.id !== action.payload.id
        );
      });
  },
});

export const postReducer = PostSlice.reducer;
