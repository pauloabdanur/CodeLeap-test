import styled from '@emotion/styled';
import { Box, Button, Typography, keyframes } from '@mui/material';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const MyContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background-color: #dddddd;
  animation: ${fadeIn} 0.8s;
  @media (max-width: 500px) {
    overflow-x: hidden;
  }
`;

export const Content = styled(Box)`
  width: 800px;
  background-color: #fff;
  height: 100%;

  @media (max-width: 1200px) {
    width: 700px;
  }

  @media (max-width: 900px) {
    width: 600px;
  }
  @media (max-width: 700px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
`;

export const TitleBox = styled(Box)`
  width: 800px;
  height: 80px;
  top: 0px;
  background-color: #7695ec;
  display: flex;

  @media (max-width: 1200px) {
    width: 700px;
  }
  @media (max-width: 900px) {
    width: 600px;
  }
  @media (max-width: 700px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
`;

export const Title = styled(Typography)`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #fff;
  padding: 27px 27px 37px;
  @media (max-width: 500px) {
    font-size: 16px;
    padding: 27px 15px;
  }
`;

export const Logout = styled(Button)`
  margin-left: auto;
  margin-right: 20px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #fff;

  @media (max-width: 500px) {
    font-size: 12px;
  }

  &:hover {
    color: #ff5151;
  }
`;
