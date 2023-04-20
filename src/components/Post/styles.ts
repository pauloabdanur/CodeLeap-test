import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const MyContainer = styled.div`
  width: 752px;
  min-height: 334px;
  border: 1px solid #999999;
  border-radius: 16px;
  margin: 24px;
  background-color: #fff;
  @media (max-width: 1200px) {
    width: 652px;
  }
  @media (max-width: 900px) {
    width: 552px;
  }
  @media (max-width: 700px) {
    width: 452px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const TitleBox = styled(Box)`
  width: 752px;
  height: 70px;
  background-color: #7695ec;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 652px;
  }
  @media (max-width: 900px) {
    width: 552px;
  }
  @media (max-width: 700px) {
    width: 452px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const IconWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconButton = styled(Button)`
  width: 20px;
  height: 25px;
  @media (max-width: 500px) {
    min-width: 15px;
    min-height: 20px;
    margin-right: 10px;
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 22px;
  margin: 23px 23px;
  color: #fff;
  @media (max-width: 500px) {
    width: 14px;
    height: 18px;
    margin: 15px 10px;
  }
`;

export const Title = styled(Typography)`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #fff;
  padding: 24px 24px 24px;
  @media (max-width: 500px) {
    font-size: 16px;
    padding: 20px 15px;
  }
`;

export const Content = styled(Typography)`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000;

  word-wrap: break-word;

  margin: 16px 24px 24px 24px;
  text-align: left;
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const ContentWrapper = styled(Box)``;

export const Author = styled(Typography)`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #777;
  padding: 24px 24px 24px;
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 20px;
  }
`;
