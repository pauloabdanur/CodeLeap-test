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
  @media (max-width: 1500px) {
  }
`;

export const Image = styled.img`
  @media (max-width: 1400px) {
    transform: scale(0.9);
  }
  @media (max-width: 900px) {
    transform: scale(0.8);
  }
  @media (max-width: 600px) {
    transform: scale(0.6);
  }
  @media (max-width: 400px) {
    transform: scale(0.4);
  }
`;

export const MyButton = styled(Button)`
  color: #000;
  font-size: large;
  border-radius: 8px;

  @media (max-width: 600px) {
    font-size: medium;
  }

  &:hover {
    background: #000;
    color: #fff;
  }
`;
