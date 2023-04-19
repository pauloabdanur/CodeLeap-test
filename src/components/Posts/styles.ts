import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const MyContainer = styled.div`
  width: 752px;
  height: 334px;
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
`;

export const EditBox = styled(Box)`
  position: absolute;
  width: 660px;
  height: 360px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #999;
  border-radius: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

export const SaveButton = styled(Button)`
  width: 120px;
  height: 32px;

  margin: 24px 24px 0 0;

  background: #47f960;
  border-radius: 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #fff;

  &:hover {
    color: #47f960;
    border: 1px solid #47f960;
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

export const InputName = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin: 24px 0 0 24px;
`;

export const TitleInput = styled.input`
  width: 612px;
  height: 32px;
  margin: 8px 0 0 24px;
  background: #ffffff;
  border: 1px solid #777777;
  border-radius: 8px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding-left: 10px;
`;

export const ContentInput = styled.textarea`
  width: 612px;
  height: 74px;
  margin: 8px 0 0 24px;
  background: #ffffff;
  border: 1px solid #777777;
  border-radius: 8px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding-left: 10px;
  padding-top: 10px;
`;
