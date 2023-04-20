import styled from '@emotion/styled';
import { Button, Container, keyframes } from '@mui/material';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const MyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  animation: ${fadeIn} 1s;
`;

export const MyButton = styled(Button)`
  color: #000;
  font-size: large;
`;
