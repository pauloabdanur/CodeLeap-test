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

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addNewPost } from '../../redux/features/post/postSlice';

const NewPost = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.username.name);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleClick = () => {
    if (title !== '' && content !== '') {
      const post = { username, title, content };
      dispatch(addNewPost(post));
    }
    setTitle('');
    setContent('');
  };

  return (
    <MyContainer>
      <Title>What's on your mind?</Title>
      <InputName>Title</InputName>
      <TitleInput
        placeholder="ex: Hello World"
        value={title}
        onChange={handleTitleChange}
      />
      <InputName>Content</InputName>
      <ContentInput
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
      />
      <Box display="flex" justifyContent="flex-end">
        <MyButton disabled={!title || !content} onClick={handleClick}>
          Enter
        </MyButton>
      </Box>
    </MyContainer>
  );
};

export default NewPost;
