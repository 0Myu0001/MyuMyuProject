import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';

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

const AccountPanel = () => {
  const [value, setValue] = React.useState(0);

  const [userProfiles, setUserProfile] = React.useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/user/')
      .then((res) => res.json())
      .then(data => setUserProfile(data[0]))
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <Paper 
      sx = {{m: '5px', gridArea: '2 / 2 / 25 / 5', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px',}}
      elevation = {6}
    >
      <Box sx={{
        width: '100%', 
        height: '100%', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(12, 1fr)',
      }}
      >
        <Paper sx={{gridArea: '1 / 1 / 5 / 5', borderRadius: '15px', width: '100%', pt: '100%',}}>
        </Paper>
        {/* get data from django databases */}
        <Typography sx={{gridArea: '2 / 5 / 3 / 10', fontFamily: 'Roboto', fontSize: '32px', my: 'auto', mx: '10px', color: '#3f3f3f',}}>
          { userProfiles ? userProfiles.user_name : 'Loading...' }
        </Typography> 
        <Typography sx={{gridArea: '3 / 5 / 4 / 10', fontFamily: 'Roboto', fontSize: '24px', my: 'auto', mx: '10px', color: '#3f3f3f',}}>
          { userProfiles ? userProfiles.user_id : 'Loading...' }
        </Typography>
        <Box sx={{gridArea: '4 / 6 / 5 / 8', display: 'flex', flexDirection: 'column',}}>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>Following</Typography>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>-.--M</Typography>
        </Box>
        <Box sx={{gridArea: '4 / 8 / 5 / 10', display: 'flex', flexDirection: 'column',}}>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>Followers</Typography>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>-.--M</Typography>
        </Box>
        <Box sx={{gridArea: '4 / 10 / 5 / 12', display: 'flex', flexDirection: 'column',}}>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>Likes</Typography>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>-.--M</Typography>
        </Box>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          sx ={{gridArea: '5 / 1 / 6 / 13', m: 'auto',}}
        >
          <StyledTab label="Singles" sx={{fontFamily: 'Roboto',}} />
          <StyledTab label="Albums" sx={{fontFamily: 'Roboto',}} />
          <StyledTab label="Playlists" sx={{fontFamily: 'Roboto',}} />
        </StyledTabs>
      </Box>
    </Paper>
  );
}

export default AccountPanel;
