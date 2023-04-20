import { Box, Modal } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { updatePost } from '../../actions/updatePost';
import {
  CancelButton,
  EditBox,
  SaveButton,
  ModalTitle,
  InputName,
  TitleInput,
  ContentInput,
} from './styles';
import { ChangeEvent, useState } from 'react';
import { UpdatePostType } from '../../types';

type Props = {
  post: UpdatePostType;
  openModal: boolean;
  close: () => void;
};

const EditModal = ({ post, openModal, close }: Props) => {
  const dispatch = useAppDispatch();

  const { id, title, content } = post;
  const [titleValue, setTitleValue] = useState(title);
  const [contentValue, setContentValue] = useState(content);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitleValue(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setContentValue(e.target.value);
  };

  const handleEdit = (id: number) => {
    const updatedPost = { id, title: titleValue, content: contentValue };
    dispatch(updatePost(updatedPost));
    close();
  };

  return (
    <Modal open={openModal} onClose={close}>
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
          <CancelButton onClick={close}>Cancel</CancelButton>
          <SaveButton onClick={() => handleEdit(id)}>Save</SaveButton>
        </Box>
      </EditBox>
    </Modal>
  );
};

export default EditModal;
