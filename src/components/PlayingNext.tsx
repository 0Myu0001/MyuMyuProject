import * as React from 'react';
import { Box, Paper, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PlayingNext = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null); 
  };

  return(
    <Paper sx={{
      m: '5px',
      gridArea: '13 / 5 / 25 / 7',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
      }}
      elevation = {6}
    >
      <Typography variant='h4' sx={{fontFamily: 'Roboto', color: '#203f6f',}}>Playing Next</Typography>
      <Box sx={{mx: '2.5%', height: '100px', width: '95%', borderBottom: '1px', display: 'flex'}}>
        <Paper sx={{m: '10px', height: '80px', aspectRatio: '1 / 1'}}>
        </Paper>
        <Typography variant='body1' sx={{my: 'auto', ml: '10px', fontFamily: 'Roboto', fontSize: '24px'}}>title</Typography>
        <Typography variant='body1' sx={{my: 'auto', ml: '20%', fontFamily: 'Roboto', fontSize: '16px'}}>user_id</Typography>
        <Typography variant='body1' sx={{my: 'auto', ml: 'auto', fontFamily: 'Roboto', }}>--:--</Typography>
        <IconButton area-label="more" fontSize="medium" onClick={handleClick} sx={{ my: 'auto' }}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>Analyze</MenuItem>
          <MenuItem onClick={handleClose}>Account Setting</MenuItem>
          <MenuItem onClick={handleClose}>Privacy Setting</MenuItem>
          <MenuItem onClick={handleClose}>Sign Out</MenuItem>
        </Menu>
      </Box>
    </Paper>
  );
};

export default PlayingNext;
