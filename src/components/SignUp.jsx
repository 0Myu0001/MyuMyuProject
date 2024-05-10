import * as React from 'react';
import { Paper, TextField, Button, Box, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

const SignUp = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here using the username, email, and age values
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Age:', age);
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
            label="Display name"
            value={username}
            onChange={handleUsernameChange}
            margin="normal"
            variant='standard'
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
            label="Email Address"
            value={email}
            onChange={handleEmailChange}
            margin="normal"
            variant='standard'
            required
            sx={{
              mx: 'auto',
              my: '10px',
              width: '75%',
            }}
          />
        <TextField
          label="Birth Date"
          type="date"
          value={age}
          onChange={handleAgeChange}
          margin="normal"
          variant='standard'
          required
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            mx: 'auto',
            my: '10px',
            width: '75%',
          }}
        />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
      <Box>
        <Button 
          variant='outlined' 
          sx={{
            mx: '5%',
            my: '10px', 
            width: '40%', 
            textTransform: 'none', 
            fontFamily: 'Noto Sans jp',
          }} 
            startIcon={<GoogleIcon />} 
            href="https://www.google.com"
        >
          Sign up with Google
        </Button>
        <Button 
          variant='outlined' 
          sx={{
            mx: '5%',
            my: '10px', 
            width: '40%', 
            textTransform: 'none', 
            fontFamily: 'Noto Sans jp',
          }} 
          startIcon={<AppleIcon />} 
          href="https://www.google.com"
        >
          Sign up with Apple
        </Button>
      </Box>
    </Paper>
  );
}


export default SignUp;
