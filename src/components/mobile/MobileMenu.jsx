import * as React from 'react';
import { Paper, Box } from '@mui/material';

const MobileMenu = () => {
  return (
    <Paper sx={{m: '5px',backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', gridArea: '12 / 1 / 13 / 7', }} elevation={6}>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: '100%', width: '100%'}}>
        <Box>

        </Box>
      </Box>
    </Paper>
  );
}

export default MobileMenu;
