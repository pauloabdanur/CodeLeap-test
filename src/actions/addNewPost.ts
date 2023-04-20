import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { NewPostType } from '../types';

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
