import * as React from 'react';
import { Paper, Box, Typography, Button, TextField } from '@mui/material';



const ForgotPassword = () => {
  const [showTextField, setShowTextField] = React.useState(false);
  const [hideButton, setHideButton] = React.useState(true);
  const [showButton, setShowButton] = React.useState(false);

  const handleButtonClick = () => {
    setShowTextField(true);
    setHideButton(false);
    setShowButton(true);
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
      }}
    >
      <Typography variant="h4" sx={{fontFamily: 'Noto Sans', my: '5px', mx: 'auto', color: '#3F3F3F'}}>Reset password</Typography>
      <TextField id="standard-basic" label="Username or Mail address" variant="standard"
        sx={{
          mx: 'auto',
          my: '10px',
          width: '75%',
        }}
      />
      {showTextField && (
        <TextField id="standard-basic" label="Configure code" variant="standard"
          sx={{
            mx: 'auto',
            my: '10px',
            width: '75%',
          }}
        />
      )}
      {hideButton && (
        <Button variant="contained" onClick={handleButtonClick} sx={{mx: 'auto', my: '10px', width: '40%',textTransform: 'none', fontFamily: 'Noto Sans jp',}}>
          Send configure code 
        </Button>
      )}

      {showButton && (
        <Button variant="contained" onClick={handleButtonClick} sx={{mx: 'auto', my: '10px', width: '40%',textTransform: 'none', fontFamily: 'Noto Sans jp',}}>
          Next
        </Button>
      )}

    </Paper>
  );
}


export default ForgotPassword;
