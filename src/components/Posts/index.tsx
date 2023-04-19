import {
  Author,
  CancelButton,
  Content,
  ContentInput,
  ContentWrapper,
  DeleteBox,
  DeleteButton,
  EditBox,
  Icon,
  IconButton,
  IconWrapper,
  InputName,
  ModalTitle,
  MyContainer,
  SaveButton,
  Title,
  TitleBox,
  TitleInput,
} from './styles';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  deleteContent,
  updateContent,
} from '../../redux/features/content/contentSlice';
import { Box, Modal } from '@mui/material';

import deleteIcon from '../../assets/images/delete_icon.png';
import editIcon from '../../assets/images/edit_icon.png';
import { ChangeEvent, useState } from 'react';

const Posts = () => {
  const contents = useAppSelector((state) => state.createContent.contents);
  const username = useAppSelector((state) => state.username.name);
  const dispatch = useAppDispatch();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitleValue(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setContentValue(e.target.value);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteContent({ id }));
    setOpenDeleteModal(false);
  };

  const handleEdit = (id: string) => {
    dispatch(
      updateContent({
        id,
        title: titleValue,
        content: contentValue,
      })
    );
  };

  return (
    <div>
      {contents.map((content) => (
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
            <Content>{content.content}</Content>
          </ContentWrapper>
          {/* DELETE MODAL */}
          <Modal
            open={openDeleteModal}
            onClose={() => setOpenDeleteModal(false)}
          >
            <DeleteBox>
              <ModalTitle>
                Are you sure you want to delete this item?
              </ModalTitle>
              <Box display="flex" justifyContent="flex-end">
                <CancelButton onClick={() => setOpenDeleteModal(false)}>
                  Cancel
                </CancelButton>
                <DeleteButton onClick={() => handleDelete(content.id)}>
                  Delete
                </DeleteButton>
              </Box>
            </DeleteBox>
          </Modal>
          {/* EDIT MODAL */}
          <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
            <EditBox>
              <ModalTitle>Edit Item</ModalTitle>
              <InputName>Title</InputName>
              <TitleInput
                placeholder="ex: Hello World"
                value={titleValue}
                onChange={handleTitleChange}
              />
              <InputName>Content</InputName>
              <ContentInput
                placeholder="Content"
                value={contentValue}
                onChange={handleContentChange}
              />
              <Box display="flex" justifyContent="flex-end">
                <CancelButton onClick={() => setOpenEditModal(false)}>
                  Cancel
                </CancelButton>
                <SaveButton onClick={() => handleEdit(content.id)}>
                  Save
                </SaveButton>
              </Box>
            </EditBox>
          </Modal>
        </MyContainer>
      ))}
    </div>
  );
};

export default Posts;
