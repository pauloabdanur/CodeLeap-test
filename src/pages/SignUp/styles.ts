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
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #dddddd;
  animation: ${fadeIn} 0.8s;
`;

export const MyBox = styled(Box)`
  box-sizing: border-box;

  position: relative;
  width: 500px;
  height: 205px;

  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 16px;
`;

export const Title = styled(Typography)`
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  margin-left: 24px;
  margin-top: 24px;
`;

export const InputTitle = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-left: 24px;
  margin-top: 24px;
`;

export const MyInput = styled.input`
  width: 452px;
  height: 32px;
  margin-left: 24px;
  margin-top: 8px;
  background: #ffffff;
  border: 1px solid #777777;
  border-radius: 8px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding-left: 10px;
`;

export const MyButton = styled(Button)<{ disabled?: boolean }>`
  width: 111px;
  height: 32px;

  margin-right: 24px;
  margin-top: 16px;

  background: ${(props) => (props.disabled ? '#ddd' : '#7695ec')};
  border-radius: 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #fff;

  &:hover {
    color: #7695ec;
  }
`;
