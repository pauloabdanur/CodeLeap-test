import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const MyContainer = styled.div`
  width: 752px;
  min-height: 334px;
  border: 1px solid #999999;
  border-radius: 16px;
  margin: 24px;
  background-color: #fff;
`;

export const TitleBox = styled(Box)`
  width: 752px;
  height: 70px;
  background-color: #7695ec;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  justify-content: space-between;
`;

export const IconWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconButton = styled(Button)`
  width: 20px;
  height: 25px;
`;

export const Icon = styled.img`
  width: 18px;
  height: 22px;
  margin: 23px 23px;
  color: #fff;
`;

export const Title = styled(Typography)`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #fff;
  padding: 24px 24px 24px;
`;

export const Content = styled(Typography)`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000;

  word-wrap: break-word;

  margin: 16px 24px 24px 24px;
  text-align: left;
`;

export const ContentWrapper = styled(Box)``;

export const Author = styled(Typography)`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #777;
  padding: 24px 24px 24px;
`;
