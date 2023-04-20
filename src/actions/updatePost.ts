import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UpdatePostType } from '../types';

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (post: UpdatePostType) => {
    try {
      const response = await axios.patch(
        `https://dev.codeleap.co.uk/careers/${post.id}/`,
        {
          title: post.title,
          content: post.content,
        }
      );
      console.log('update response:');
      console.log(response.data);
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);
