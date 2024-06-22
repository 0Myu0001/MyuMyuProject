import * as React from 'react';
import useMediaQuery from '@mui/system/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(63, 63, 63, 0.5)',
    '&.Mui-selected': {
      color: '#3f3f3f',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);


const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MainLibrary = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const mdMatches = useMediaQuery(theme.breakpoints.up('(min-width:960px)'));
  const smMatches = useMediaQuery(theme.breakpoints.up('(min-width:450px)'));

  const [playlist, setPlaylist] = React.useState(null);
  const playlistId = '10000001';

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    fetch(`http://192.168.11.14:8000/api/playlist/${playlistId}/`)
      .then((res) => res.json())
      .then(data => {setPlaylist(data)})
  } ,[playlistId]);


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
        overflowY: 'auto', 
        position: 'relative',
      }}>
        <Button 
          variant='contained'
          size='large'
          onClick={handleClick}
          sx={{
            position: 'absolute',
            bottom: '50px',
            right: '50px',
            zIndex: 1, 
          }}
        >
          Compose
        </Button>
        <Menu
          id="simple-menu"
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
          <MenuItem onClick={handleClose}>Playlist</MenuItem>
          <MenuItem onClick={handleClose}>Artist</MenuItem>
          <MenuItem onClick={handleClose}>Singles</MenuItem>
        </Menu>
        <Typography variant='h2' sx={{fontFamily: 'Roboto', position: 'absolute', zIndex: 1, }}>Library</Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', position: 'relative', justifyContent: 'center', }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
            sx ={{ }}
          >
            <StyledTab label="Playlists" sx={{fontFamily: 'Roboto',}} />
            <StyledTab label="Artists" sx={{fontFamily: 'Roboto',}} />
            <StyledTab label="Singles" sx={{fontFamily: 'Roboto',}} />
          </StyledTabs>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Roboto',}}>Playlists</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', overflowX: 'auto', }} onClick={() => window.open('https://www.google.com')}>
            {playlist && (
              <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 1 / 1 '}}>
                <img src={playlist.playlist_image} alt='playlist1' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px',}} />
              </Paper>
            )}
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Roboto',}}>Artists</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', overflowX: 'auto', }}>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 ', borderRadius: '90px', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 ', borderRadius: '90px', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 ', borderRadius: '90px', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 ', borderRadius: '90px', cursor: 'pointer',}}>
            </Paper>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Roboto',}}>Singles</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', overflowX: 'auto', }}>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '30px', height: '160px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default MainLibrary;
