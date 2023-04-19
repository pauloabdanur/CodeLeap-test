import { Box, Modal } from '@mui/material';
import { deleteContent } from '../../redux/features/content/contentSlice';
import { useAppDispatch } from '../../redux/store';
import { CancelButton, DeleteBox, DeleteButton, ModalTitle } from './styles';

type Props = {
  id: string;
  openModal: boolean;
  close: () => void;
};

const DeleteModal = ({ id, openModal, close }: Props) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteContent({ id }));
  };

  return (
    <Modal open={openModal} onClose={close}>
      <DeleteBox>
        <ModalTitle>Are you sure you want to delete this item?</ModalTitle>
        <Box display="flex" justifyContent="flex-end">
          <CancelButton onClick={close}>Cancel</CancelButton>
          <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
        </Box>
      </DeleteBox>
    </Modal>
  );
};

export default DeleteModal;
