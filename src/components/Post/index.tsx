import {
  Author,
  Content,
  ContentWrapper,
  Icon,
  IconButton,
  IconWrapper,
  MyContainer,
  Title,
  TitleBox,
} from './styles';

import { Box } from '@mui/material';

import deleteIcon from '../../assets/images/delete_icon.png';
import editIcon from '../../assets/images/edit_icon.png';
import { useState } from 'react';
import DeleteModal from '../DeleteModal';
import EditModal from '../EditModal';

type Props = {
  content: {
    id: string;
    username: string;
    title: string;
    postText: string;
  };
  username: string;
};

const Posts = ({ content, username }: Props) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <div>
      <MyContainer key={content.id}>
        <TitleBox>
          <Title>{content.title}</Title>
          <IconWrapper>
            <IconButton onClick={() => setOpenDeleteModal(true)}>
              <Icon src={deleteIcon} alt="" />
            </IconButton>
            <IconButton onClick={() => setOpenEditModal(true)}>
              <Icon src={editIcon} alt="" />
            </IconButton>
          </IconWrapper>
        </TitleBox>
        <ContentWrapper>
          <Box display="flex" justifyContent="space-between">
            <Author>@{username}</Author>
            <Author>25 minutes ago</Author>
          </Box>
          <Content>{content.postText}</Content>
        </ContentWrapper>
        <DeleteModal
          id={content.id}
          openModal={openDeleteModal}
          close={() => setOpenDeleteModal(false)}
        />
        <EditModal
          content={content}
          openModal={openEditModal}
          close={() => setOpenEditModal(false)}
        />
      </MyContainer>
    </div>
  );
};

export default Posts;
