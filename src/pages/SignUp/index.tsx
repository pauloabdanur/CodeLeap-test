import { Box } from '@mui/material';
import {
  InputTitle,
  MyContainer,
  MyBox,
  MyButton,
  MyInput,
  Title,
} from './styles';
import { ChangeEvent, useState } from 'react';

import { useAppDispatch } from '../../redux/store';
import { setUsername } from '../../redux/features/userName/userNameSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(setUsername(inputValue));
    navigate('/start');
  };

  return (
    <MyContainer>
      <MyBox>
        <Title>Welcome to CodeLeap network!</Title>

        <InputTitle>Please enter your username</InputTitle>
        <MyInput
          placeholder="ex: Paulo Abdanur"
          value={inputValue}
          onChange={handleChange}
        />
        <Box display="flex" justifyContent="flex-end">
          <MyButton disabled={!inputValue} onClick={handleClick}>
            Enter
          </MyButton>
        </Box>
      </MyBox>
    </MyContainer>
  );
};

export default SignUp;
