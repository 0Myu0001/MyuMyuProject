import * as React from 'react';
import useMediaQuery from '@mui/system/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const MainExplorer = () => {
  const theme = useTheme();
  const mdmatches = useMediaQuery(theme.breakpoints.up('(min-width:960px)'));
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
        <Typography variant='h2' sx={{fontFamily: 'Roboto',}}>Explore</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Roboto',}}>Suggest</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto'}}>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 4 / 3 '}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 4 / 3 '}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 4 / 3 '}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 4 / 3 '}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 4 / 3 '}}>
            </Paper>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Roboto',}}>Playlists</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', overflowX: 'auto', }}>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Roboto',}}>Artists</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', overflowX: 'auto', }}>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 ', borderRadius: '80px'}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 ', borderRadius: '80px'}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 ', borderRadius: '80px'}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 ', borderRadius: '80px'}}>
            </Paper>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Roboto',}}>Singles</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', overflowX: 'auto', }}>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
            <Paper sx={{m: '20px', height: '120px', aspectRatio: ' 1 / 1 '}}>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Paper>
      
  );
}

export default MainExplorer;
