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

export const DeleteBox = styled(Box)`
  position: absolute;
  width: 660px;
  height: 146px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #999;
  border-radius: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 0.8s;
  @media (max-width: 1200px) {
    width: 550px;
  }
  @media (max-width: 900px) {
    width: 450px;
  }
  @media (max-width: 700px) {
    width: 350px;
  }
  @media (max-width: 500px) {
    width: 250px;
  }
`;

export const ModalTitle = styled(Typography)`
  padding: 24px 0 0 24px;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #000;
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 900px) {
    font-size: 18px;
  }
  @media (max-width: 700px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const DeleteButton = styled(Button)`
  width: 120px;
  height: 32px;
  margin: 24px 24px 0 0;
  background: #ff5151;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  @media (max-width: 1200px) {
    font-size: 16px;
    width: 110px;
    height: 28px;
  }
  @media (max-width: 900px) {
    font-size: 15px;
    width: 100px;
  }
  @media (max-width: 700px) {
    font-size: 14px;
    width: 90px;
    height: 28px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    width: 80px;
    height: 24px;
  }

  &:hover {
    color: #ff5151;
    border: 1px solid #ff5151;
  }
`;

export const CancelButton = styled(Button)`
  width: 120px;
  height: 32px;
  margin: 24px 16px 0 0;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #999;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000;

  @media (max-width: 1200px) {
    font-size: 16px;
    width: 110px;
    height: 28px;
  }
  @media (max-width: 900px) {
    font-size: 15px;
    width: 100px;
  }
  @media (max-width: 700px) {
    font-size: 14px;
    width: 90px;
    height: 28px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    width: 80px;
    height: 24px;
  }
  &:hover {
    background: #999;
    color: #fff;
  }
`;
