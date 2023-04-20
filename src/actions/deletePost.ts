import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: number) => {
    try {
      const response = await axios.delete(
        `https://dev.codeleap.co.uk/careers/${id}/`
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);
