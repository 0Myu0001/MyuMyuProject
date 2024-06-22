import * as React from 'react';
import useMediaQuery from '@mui/system/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
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
      color: '#203f6f',
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

const MainExplorer = () => {
  const theme = useTheme();
  const mdmatches = useMediaQuery(theme.breakpoints.up('(min-width:960px)'));
  const smMatches = useMediaQuery(theme.breakpoints.up('(min-width:450px)'));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Typography variant='h2' sx={{fontFamily: 'Roboto', color: '#203f6f', }}>Explore</Typography>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          sx ={{ m: 'auto',}}
        >
          <StyledTab label="Playlists" sx={{fontFamily: 'Roboto', color: 'rgba(32, 63, 111, 0.5)', }} />
          <StyledTab label="Artists" sx={{fontFamily: 'Roboto', color: 'rgba(32, 63, 111, 0.5)', }} />
          <StyledTab label="Singles" sx={{fontFamily: 'Roboto', color: 'rgba(32, 63, 111, 0.5)', }} />
        </StyledTabs>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Roboto', color: '#203f6f', }}>Suggest</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto'}}>
            <Paper sx={{m: '20px', height: '180px', aspectRatio: ' 4 / 3 ', cursor: 'pointer'}} onClick={() => window.open('https://www.google.com')}>
              <img src="./suggest1.jpeg" alt='suggest1' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px',}} />
            </Paper>
            <Paper sx={{m: '20px', height: '180px', aspectRatio: ' 4 / 3 ', cursor: 'pointer'}} onClick={() => window.open('https://www.google.com')}>
              <img src="./suggest2.jpeg" alt='suggest2' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px',}} />
            </Paper>
            <Paper sx={{m: '20px', height: '180px', aspectRatio: ' 4 / 3 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '20px', height: '180px', aspectRatio: ' 4 / 3 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '20px', height: '180px', aspectRatio: ' 4 / 3 ', cursor: 'pointer',}}>
            </Paper>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Roboto', color: '#203f6f', }}>Playlists</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', overflowX: 'auto', }}>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Roboto', color: '#203f6f', }}>Artists</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', overflowX: 'auto', }}>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', borderRadius: '80px', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', borderRadius: '80px', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', borderRadius: '80px', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', borderRadius: '80px', cursor: 'pointer',}}>
            </Paper>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column',}}>
          <Typography variant='h4' sx={{fontFamily: 'Roboto', color: '#203f6f', }}>Singles</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', overflowX: 'auto', }}>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            <Paper sx={{m: '20px', height: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Paper>
      
  );
}

export default MainExplorer;
