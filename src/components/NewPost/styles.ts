import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const MyContainer = styled.div`
  width: 752px;
  height: 334px;
  border: 1px solid #999999;
  border-radius: 16px;
  margin: 24px;
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

export const InputName = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-left: 24px;
  margin-top: 24px;
`;

export const TitleInput = styled.input`
  width: 704px;
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

export const ContentInput = styled.textarea`
  width: 704px;
  height: 74px;
  margin-left: 24px;
  margin-top: 8px;
  background: #ffffff;
  border: 1px solid #777777;
  border-radius: 8px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding: 10px 10px 0;
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
