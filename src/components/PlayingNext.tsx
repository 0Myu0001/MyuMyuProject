import * as React from 'react';
import { Box, Paper, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PlayingNext = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null); 
  };

  return(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Paper sx={{
      m: '5px',
      gridArea: '13 / 5 / 25 / 7',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
      }}
      elevation = {6}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Typography variant='h4' sx={{fontFamily: 'Roboto', color: '#203f6f',}}>Playing Next</Typography>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box sx={{mx: '2.5%', height: '100px', width: '95%', borderBottom: '1px', display: 'flex'}}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Paper sx={{m: '10px', height: '80px', aspectRatio: '1 / 1'}}>
        </Paper>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Typography variant='body1' sx={{my: 'auto', ml: '10px', fontFamily: 'Roboto', fontSize: '24px'}}>title</Typography>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Typography variant='body1' sx={{my: 'auto', ml: '20%', fontFamily: 'Roboto', fontSize: '16px'}}>user_id</Typography>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Typography variant='body1' sx={{my: 'auto', ml: 'auto', fontFamily: 'Roboto', }}>--:--</Typography>
        // @ts-expect-error TS(2769): No overload matches this call.
        <IconButton area-label="more" fontSize="medium" onClick={handleClick} sx={{ my: 'auto' }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <MoreVertIcon />
        </IconButton>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <MenuItem onClick={handleClose}>Analyze</MenuItem>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <MenuItem onClick={handleClose}>Account Setting</MenuItem>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <MenuItem onClick={handleClose}>Privacy Setting</MenuItem>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <MenuItem onClick={handleClose}>Sign Out</MenuItem>
        </Menu>
      </Box>
    </Paper>
  );
};

export default PlayingNext;
