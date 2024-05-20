import * as React from 'react';
import { Paper, TextField, Button, Box, Typography } from '@mui/material';

const SignUp2 = () => {
  const [username, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');
  const [isNextClicked, setIsNextClicked] = React.useState(false);

  const handleNextClick = () => setIsNextClicked(true);

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      user_id: username,
      user_email: email,
      age: age,
    };

    fetch('http://localhost:8000/api/user/', {
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
            value={username}
            onChange={handleUsernameChange}
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
            ↑Other people can see this name. Please think carefully for you safe.
          </Typography>
          <TextField
            label="Re-enter Password"
            value={email}
            onChange={handleEmailChange}
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
            variant='outlined' 
            sx={{
              mx: 'auto',
              my: '10px', 
              width: '40%', 
              textTransform: 'none', 
              fontFamily: 'Noto Sans jp',
            }} 
            href="https://www.google.com"
          >I'm not Robot</Button>
          <Button type='submit' variant='contained' 
            sx={{
              mx: 'auto', 
              my: '10px', 
              width: '40%',
              textTransform: 'none', 
              fontFamily: 'Noto Sans jp',
            }}
          >
            Next
          </Button>
        </Box>
      </form>
    </Paper>
  );
}


export default SignUp2;
