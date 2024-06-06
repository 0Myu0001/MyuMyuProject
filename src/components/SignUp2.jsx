import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Paper, TextField, Button, Box, Typography } from '@mui/material';

const SignUp2 = ({ handleNext }) => {
  const [password, setPassword] = React.useState('');
  const [reEnteredPassword, setReEnteredPassword] = React.useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleReEnteredPasswordChange = (event) => {
    setReEnteredPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      user_id: password,
    };

    if (password === reEnteredPassword) {
      fetch('http://localhost:8000/api/user_strict_information/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    } else if (password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    } else if (password.length > 20) { 
      alert('Password must be at most 20 characters');
      return;
    } else if (!password.match(/^[a-zA-Z0-9]+$-_/)) {
      alert('Password must be alphanumeric');
      return;
    } else if (password !== reEnteredPassword) {
      alert('Password does not match');
      return;
    }

  };

  return (
    <Paper 
      elevation={6}
      sx={{
        gridArea: '5 / 3 / 22 / 5',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
      }}
    >
      <Typography variant="h4" sx={{fontFamily: 'Noto Sans', my: '5px', mx: 'auto', color: '#3F3F3F'}}>Sign up to MyuMyu</Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            margin="normal"
            variant='standard'
            type='password'
            auto-complete='current-password'
            required
            sx={{
              mx: 'auto',
              my: '10px',
              width: '75%',
            }}
          />
          <Typography 
            variant='caption text' 
            sx={{
              fontFamily: 'Noto Sans jp', 
              color: '#3F3F3F', 
              fontSize: '14px', 
              textAlign: 'center',
              mx: 'auto',
            }}
          >
            ↑Password must be at least 8 characters, at most 20 characters.
          </Typography>
          <Typography 
            variant='caption text' 
            sx={{
              fontFamily: 'Noto Sans jp', 
              color: '#3F3F3F', 
              fontSize: '14px', 
              textAlign: 'center',
              mx: 'auto',
            }}
          >
            You can also use - and _ 
          </Typography>
          <TextField
            label="Re-enter Password"
            value={reEnteredPassword}
            onChange={handleReEnteredPasswordChange}
            margin="normal"
            variant='standard'
            type='password'
            auto-complete='current-password'
            required
            sx={{
              mx: 'auto',
              my: '10px',
              width: '75%',
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Button 
            variant='standard' 
            sx={{
              mx: 'auto',
              my: '10px', 
              width: '40%', 
              textTransform: 'none', 
              fontFamily: 'Noto Sans jp',
            }} 
            href="https://www.google.com"
          >I'm not Robot</Button>
          <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Button type='submit' variant='outlined' onClick={handleNext}
              sx={{
                my: '10px', 
                width: '40%',
                textTransform: 'none', 
                fontFamily: 'Noto Sans jp',
              }}
            >
              Prev
            </Button>
            <Button type='submit' variant='contained' onClick={handleNext}
              sx={{
                my: '10px', 
                width: '40%',
                textTransform: 'none', 
                fontFamily: 'Noto Sans jp',
              }}
            >
              Next
            </Button>
          </Box>
          
        </Box>
      </form>
    </Paper>
  );
}


export default SignUp2;
