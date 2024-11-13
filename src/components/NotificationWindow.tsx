import * as React from 'react';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

const notifications = [
  'New login from other device. Please make sure your account is secure.'
]

const NotificationWindow = () => {
  return(
    <Paper 
      sx = {{m: '5px', gridArea: '2 / 2 / 25 / 5', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px',}}
      elevation = {6}
    >
      <Typography variant='h4' sx={{fontFamily: 'Roboto', fontSize: '32px', mx: '10px', color: '#203f6f',}}>Notifications</Typography>
      <Box sx={{display: 'flex', flexDirection: 'column',}}>
        <Box sx={{p: '2%', borderBottom: '1px solid #dddde7'}}>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', color: '#203f6f'}}> {notifications}</Typography>
        </Box>
        
      </Box>
    </Paper>
  );
}

export default NotificationWindow;
