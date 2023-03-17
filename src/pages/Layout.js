import React from 'react';
import { Outlet } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Navigation from '../components/Navigation';

function Layout() {
  return (
    <Stack
      sx={{
        minHeight: '100vh',
        maxWidth: '100vw',
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Navigation />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}

export default Layout;
