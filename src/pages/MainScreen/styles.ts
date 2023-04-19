import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const MyContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background-color: #dddddd;
`;

export const Content = styled(Box)`
  width: 800px;
  background-color: #fff;
`;

export const TitleBox = styled(Box)`
  width: 800px;
  height: 80px;
  top: 0px;
  background-color: #7695ec;
`;

export const Title = styled(Typography)`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #fff;
  padding: 27px 27px 37px;
`;
