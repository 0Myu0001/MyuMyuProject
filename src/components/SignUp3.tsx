import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Paper, TextField, Button, Box, Typography } from '@mui/material';

const SignUp3 = () => {
  const [username, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state || !location.state.fromSignUp2) {
    navigate('/signin/signup/');
  };

  const handleUsernameChange = (event: any) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleAgeChange = (event: any) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event: any) => {
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Typography variant="h4" sx={{fontFamily: 'Noto Sans', my: '5px', mx: 'auto', color: '#3F3F3F'}}>Sign up to MyuMyu</Typography>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <form onSubmit={handleSubmit}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TextField
            label="Display Name"
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
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography 
            // @ts-expect-error TS(2769): No overload matches this call.
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
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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


export default SignUp3;
