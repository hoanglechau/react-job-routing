import React from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import LoginForm from '../components/LoginForm';

function Login() {
  const navigate = useNavigate();

  return (
    <Stack sx={{ p: 4, alignItems: 'center' }}>
      <LoginForm
        callback={() => {
          navigate(-1);
        }}
      />
    </Stack>
  );
}

export default Login;
