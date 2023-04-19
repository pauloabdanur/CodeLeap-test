import { Box, Modal } from '@mui/material';
import { useAppDispatch } from '../../redux/store';
import { updateContent } from '../../redux/features/content/contentSlice';
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

type Props = {
  content: {
    id: string;
    username: string;
    title: string;
    postText: string;
  };
  openModal: boolean;
  close: () => void;
};

const EditModal = ({ content, openModal, close }: Props) => {
  const dispatch = useAppDispatch();

  const { id, username, title, postText } = content;
  const [titleValue, setTitleValue] = useState(title);
  const [contentValue, setContentValue] = useState(postText);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitleValue(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setContentValue(e.target.value);
  };

  const handleEdit = (id: string) => {
    dispatch(
      updateContent({
        id,
        username: username,
        title: titleValue,
        postText: contentValue,
      })
    );
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
