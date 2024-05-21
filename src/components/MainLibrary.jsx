import * as React from 'react';
import useMediaQuery from '@mui/system/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const MainLibrary = () => {

  const theme = useTheme();
  const mdMatches = useMediaQuery(theme.breakpoints.up('(min-width:960px)'));
  const smMatches = useMediaQuery(theme.breakpoints.up('(min-width:450px)'));

  return(
    <Paper 
      sx = {{m: '5px', gridArea: '2 / 2 / 25 / 5', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px',}}
      elevation = {6}
    >
      <Box sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        overflowY: 'auto',
      }}>
        <Typography variant='h2' sx={{fontFamily: 'Noto Sans JP', fontSize: '50px', mx: '10px',}}>Your Library</Typography>
        <Typography variant='h4' sx={{fontFamily: 'Noto Sans JP', fontSize: '32px', mx: '10px',}}>Playlists</Typography>
        <Box sx={{minHeight: '250px',my: '1%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'auto',}}>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '20px'}}></Paper>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '20px'}}></Paper>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%'}}></Paper>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%'}}></Paper>
        </Box>
        <Typography variant='h4' sx={{fontFamily: 'Noto Sans JP', fontSize: '32px', mx: '10px',}}>Artists</Typography>
        <Box sx={{my: '1%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'auto',}}>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%', borderRadius: '50%',}}></Paper>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%', borderRadius: '50%',}}></Paper>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%', borderRadius: '50%',}}></Paper>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%', borderRadius: '50%',}}></Paper>
        </Box>
        <Typography variant='h4' sx={{fontFamily: 'Noto Sans JP', fontSize: '32px', mx: '10px',}}>Albums</Typography>
        <Box sx={{my: '1%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'auto',}}>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%'}}></Paper>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%'}}></Paper>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%'}}></Paper>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%'}}></Paper>
        </Box>
        <Typography variant='h4' sx={{fontFamily: 'Noto Sans JP', fontSize: '32px', mx: '10px',}}>Songs</Typography>
        <Box sx={{my: '1%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'auto',}}>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%'}}></Paper>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%'}}></Paper>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%'}}></Paper>
          <Paper sx={{minWidth: '180px', pt: '180px', m: '5%'}}></Paper>
        </Box>
      </Box>
    </Paper>
      
  );
}

export default MainLibrary;
