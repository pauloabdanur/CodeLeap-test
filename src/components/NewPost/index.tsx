import { ChangeEvent, useState } from 'react';
import {
  InputName,
  MyContainer,
  ContentInput,
  Title,
  TitleInput,
  MyButton,
} from './styles';
import { Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { createPost } from '../../redux/features/post/postSlice';

import { v4 as uuidv4 } from 'uuid';

const NewPost = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.username.name);

  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitleValue(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setContentValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(
      createPost({
        id: uuidv4(),
        username: username,
        title: titleValue,
        content: contentValue,
      })
    );
    setTitleValue('');
    setContentValue('');
  };

  return (
    <MyContainer>
      <Title>What's on your mind?</Title>
      <InputName>Title</InputName>
      <TitleInput
        placeholder="ex: Hello World"
        value={titleValue}
        onChange={handleTitleChange}
      />
      <InputName>Content</InputName>
      <ContentInput
        placeholder="Content"
        value={contentValue}
        onChange={handleContentChange}
      />
      <Box display="flex" justifyContent="flex-end">
        <MyButton disabled={!titleValue || !contentValue} onClick={handleClick}>
          Enter
        </MyButton>
      </Box>
    </MyContainer>
  );
};

export default NewPost;
