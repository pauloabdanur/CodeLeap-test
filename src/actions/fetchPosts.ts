import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
