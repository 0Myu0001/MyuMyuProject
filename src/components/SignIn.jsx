import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

const handleSignIn = async (event) => {
  event.preventDefault();

  const username = event.target.username.value;
  const password = event.target.password.value;

  const response = await fetch('http://localhost:8000/api/auth/token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('token', data.access);
    localStorage.setItem('refresh', data.refresh);
    window.location.href = '/home';
  } else {
    console.error('Failed to sign in');
  }
};


const SignIn = () => {

  return (
    <Paper 
      elevation={6}
      sx={{
        gridArea: '5 / 3 / 22 / 5',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h4" sx={{fontFamily: 'Roboto', my: '5px', mx: 'auto', color: '#3F3F3F'}}>Sign in to MyuMyu</Typography>
      <TextField id="standard-basic" label="Username or Mail address" variant="standard"
        sx={{
          mx: 'auto',
          my: '10px',
          width: '75%',
        }}
      />
      <TextField id="standard-basic" label="Password" variant="standard"
        sx={{
          mx: 'auto',
          my: '10px',
          width: '75%',
        }}
      />
      <FormGroup sx={{ml: '12.5%',}}>
        <FormControlLabel control={<Switch defaultChecked />} label={<Typography sx={{fontFamily: 'Roboto',}}>Remember me</Typography>}/>
      </FormGroup>
      <Button type='submit' variant='contained' onClick={handleSignIn} sx={{mx: 'auto', my: '10px', width: '40%',textTransform: 'none', fontFamily: 'Roboto',}}>Sign in</Button>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Button variant='outlined' sx={{my: '10px', width: '40%', textTransform: 'none', fontFamily: 'Roboto',}} startIcon={<GoogleIcon />} href="https://www.google.com">Sign in with Google</Button>
        <Button variant='outlined' sx={{my: '10px', width: '40%', textTransform: 'none', fontFamily: 'Roboto',}} startIcon={<AppleIcon />} href="https://www.google.com">Sign in with Apple</Button>
      </Box>
      <Typography variant="h6" sx={{mx: 'auto', my: '10px', color: '#3F3F3F'}}>or</Typography>
      <Box sx={{mx: 'auto', my: '10px', width: '40%',}}>
        <Link to="/signin/signup" style={{ textDecoration: 'none', color: 'inherit',}}>
          <Button variant='contained' sx={{textTransform: 'none', fontFamily: 'Roboto', width: '100%'}}>
              Sign up
          </Button>
        </Link>
      </Box>
      <Typography variant="h6" sx={{mx: 'auto', my: '10px', color: '#3F3F3F'}}>Get App</Typography>
      <Box >
        <a href="https://www.google.com">
          <img 
            src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
            alt="Download on the App Store" 
            sx={{mx: 'auto', my: '10px', width: '20%'}} 
            style={{maxWidth: '20%', margin: 'auto',}}
          />
        </a>
        <a href="https://www.google.com">
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            sx={{mx: 'auto', my: '10px', height: '20%'}}
            style={{maxWidth: '20%', margin: 'auto',}}
          />
        </a>
      </Box>
    </Paper>
  );
}

export default SignIn;
