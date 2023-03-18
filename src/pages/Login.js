import React from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import LoginForm from '../components/LoginForm';

function Login() {
  const navigate = useNavigate();
  const from = navigate.state?.from?.pathname || '/';

  return (
    <Stack sx={{ p: 4, alignItems: 'center' }}>
      <LoginForm
        callback={() => {
          navigate(from, { replace: true });
        }}
      />
    </Stack>
  );
}

export default Login;
