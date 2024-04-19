import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const MainLibrary = () => {
  return(
    <Paper 
      sx = {{m: '5px', gridArea: '2 / 2 / 25 / 5', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px',}}
      elevation = {6}
    >
      <Box sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography variant='h2' sx={{fontFamily: 'Noto Sans JP', fontSize: '50px', mx: '10px',}}>Your Library</Typography>
        <Typography variant='h4' sx={{fontFamily: 'Noto Sans JP', fontSize: '32px', mx: '10px',}}>Playlists</Typography>
        <Box sx={{my: '1%', display: 'flex', flexDirection: 'row', overflowX: 'scroll',}}>
          <Paper sx={{width: '180px', pt: '180px', mx: '5%', overflow: 'auto'}}></Paper>
          <Paper sx={{width: '180px', pt: '180px', mx: '5%'}}></Paper>
          <Paper sx={{width: '180px', pt: '180px', mx: '5%'}}></Paper>
          <Paper sx={{width: '180px', pt: '180px', mx: '5%'}}></Paper>
        </Box>
      </Box>
    </Paper>
      
  );
}

export default MainLibrary;
