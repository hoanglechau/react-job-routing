import React from 'react';
import Modal from '@mui/material/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import LoginForm from './LoginForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  border: 'none',
};

function LoginModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousLocation = location.state?.backgroundLocation?.pathname || '/';
  console.log(location.state);

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div>
      <Modal
        open
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginForm callback={() => { navigate(previousLocation, { replace: true }); }} />
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal;
