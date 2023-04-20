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

import { useAppDispatch } from '../../redux/hooks';
import { setUsername } from '../../redux/features/userName/userNameSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [user, setUser] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  const handleClick = () => {
    localStorage.setItem('username', JSON.stringify(user));
    navigate('/start');
  };

  return (
    <MyContainer>
      <MyBox>
        <Title>Welcome to CodeLeap network!</Title>

        <InputTitle>Please enter your username</InputTitle>
        <MyInput
          placeholder="ex: Paulo Abdanur"
          value={user}
          onChange={handleChange}
        />
        <Box display="flex" justifyContent="flex-end">
          <MyButton disabled={!user} onClick={handleClick}>
            Enter
          </MyButton>
        </Box>
      </MyBox>
    </MyContainer>
  );
};

export default SignUp;
