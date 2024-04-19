import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const MainExplorer = () => {
  return(
    <Paper 
      sx = {{m: '5px', gridArea: '2 / 2 / 25 / 5', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px',}}
      elevation = {6}
    >
      <Box sx={{
        height: '100%',
        width: '100%',
      }}>
        <Typography variant='h2' sx={{fontFamily: 'Noto Sans JP',}}>Top Weekly</Typography>
      </Box>
    </Paper>
      
  );
}

export default MainExplorer;
