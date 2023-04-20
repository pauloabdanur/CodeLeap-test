import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

export const MyContainer = styled.div`
  width: 752px;
  height: 334px;
  border: 1px solid #999999;
  border-radius: 16px;
  margin: 24px;
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

export const Title = styled(Typography)`
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  margin-left: 24px;
  margin-top: 24px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const InputName = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-left: 24px;
  margin-top: 24px;
  @media (max-width: 500px) {
    margin-top: 16px;
    font-size: 14px;
  }
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
  @media (max-width: 1200px) {
    width: 600px;
  }
  @media (max-width: 900px) {
    width: 500px;
  }
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 250px;
    font-size: 12px;
  }
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
  padding: 10px 0 0 10px;
  @media (max-width: 1200px) {
    width: 600px;
  }
  @media (max-width: 900px) {
    width: 500px;
  }
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 250px;
    font-size: 12px;
  }
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
