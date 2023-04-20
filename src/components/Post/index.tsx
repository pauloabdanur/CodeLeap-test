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
import type { PostType } from '../../types';

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const { id, username, created_datetime, title, content } = post;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <div>
      <MyContainer>
        <TitleBox>
          <Title>{title}</Title>
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
          <Content>{content}</Content>
        </ContentWrapper>
        <DeleteModal
          id={id}
          openModal={openDeleteModal}
          close={() => setOpenDeleteModal(false)}
        />
        <EditModal
          post={post}
          openModal={openEditModal}
          close={() => setOpenEditModal(false)}
        />
      </MyContainer>
    </div>
  );
};

export default Post;
