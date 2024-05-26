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
        overflowY: 'auto'
      }}>
        <Typography variant='h2' sx={{fontFamily: 'Noto Sans JP',}}>Library</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Noto Sans JP',}}>Playlists</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', overflowX: 'auto', }}>
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Noto Sans JP',}}>Artists</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', overflowX: 'auto', }}>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 ', borderRadius: '90px'}}>
            </Paper>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 ', borderRadius: '90px'}}>
            </Paper>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 ', borderRadius: '90px'}}>
            </Paper>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 ', borderRadius: '90px'}}>
            </Paper>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Noto Sans JP',}}>Singles</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', overflowX: 'auto', }}>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Paper>
      
  );
}

export default MainLibrary;
