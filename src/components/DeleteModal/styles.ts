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
`;

export const ModalTitle = styled(Typography)`
  padding: 24px 0 0 24px;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #000;
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
  &:hover {
    background: #999;
    color: #fff;
  }
`;
