import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';

// Search bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navigation() {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: (theme) => theme.palette.primary.light }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', p: { xs: '5px', md: 1 } }}>
          <Typography
            component="h5"
            variant="h5"
            sx={{
              display: { xs: 'none', md: 'block' },
              cursor: 'pointer',
            }}
            onClick={() => {
              navigate('/');
            }}
          >
            Job Routing
          </Typography>
          <Box component="form" sx={{ flexGrow: { xs: 0.7, md: 0 } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                name="q"
                placeholder="Search..."
                inputProps={{ 'arial-label': 'search' }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: { xs: 0.1, md: 0.7 } }} />
          <Button
            variant="text"
            startIcon={<LoginIcon />}
            sx={{ color: 'white', textTransform: 'none', display: { xs: 'none', md: 'flex' } }}
          >
            Sign in
          </Button>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
              sx={{ p: { xs: '2px', md: '10px' } }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;
