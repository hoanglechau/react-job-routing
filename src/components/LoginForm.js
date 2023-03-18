import React, { useState, useContext } from 'react';
// import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AuthContext from '../auth/AuthContext';

const style = {
  backgroundColor: (theme) => theme.palette.primary.light,
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  border: '1px solid',
  padding: '20px',
  borderRadius: '5px',
};

function LoginForm({ callback }) {
  const [username, setUsername] = useState('Hoang');
  const [password, setPassword] = useState('123456789');

  const auth = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = () => {
    // eslint-disable-next-line react/destructuring-assignment
    auth.signIn(username, callback);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box sx={style} component="form" gap={3}>
      <Typography variant="h4" component="div" sx={{ textAlign: 'center', color: (theme) => theme.palette.common.white }}>
        Log in
      </Typography>
      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="username">Username</InputLabel>
        <OutlinedInput id="username" type="text" value={username} sx={{ color: (theme) => theme.palette.common.white }} onChange={handleUsernameChange} label="Username" />
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          sx={{ color: (theme) => theme.palette.common.white }}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )}
          label="Password"
        />
      </FormControl>
      <Button
        onClick={handleLogin}
        sx={{
          m: 1, width: '30%', textAlign: 'center', margin: 'auto', backgroundColor: '#df4747',
        }}
        variant="contained"
      >
        Sign in
      </Button>
    </Box>
  );
}

export default LoginForm;
