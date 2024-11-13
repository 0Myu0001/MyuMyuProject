import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTabs = styled((props) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Tabs
    {...props}
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(63, 63, 63, 0.5)',
    '&.Mui-selected': {
      color: '#203F6F',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

const AccountPanel = () => {
  const [value, setValue] = React.useState(0);

  const [userProfiles, setUserProfile] = React.useState(null);

  React.useEffect(() => {
    fetch('http://127.0.0.1:8000/api/user/')
      .then((res) => res.json())
      .then(data => setUserProfile(data[0]))
  }, []);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const [hideSuggest, setHideSuggest] = React.useState(false);
  const scrollContainerRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      if (scrollContainerRef.current.scrollTop > 10) {
        setHideSuggest(true);
      } else {
        setHideSuggest(false);
      }
    }; 
    
    const scrollContainer = scrollContainerRef.current;
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    scrollContainer.addEventListener('scroll', handleScroll);

    // @ts-expect-error TS(2531): Object is possibly 'null'.
    return () => scrollContainer.removeEventListener('scroll', handleScroll); 
  }, []); 

  return(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Paper 
      sx = {{m: '5px', gridArea: '2 / 2 / 25 / 5', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px',}}
      elevation = {6}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box sx={{
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        overflow: 'hidden', 
      }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(4, 1fr)',
        }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Paper sx={{
            gridArea: hideSuggest ? '1 / 1 / 3 / 3' : '1 / 1 / 5 / 5', 
            borderRadius: '15px', 
            width: '100%', 
            pt: '100%',
            transition: 'gridArea 0.5s', }}>
          </Paper>
          {/* get data from django databases */}
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography sx={{gridArea: '2 / 5 / 3 / 10', fontFamily: 'Roboto', fontSize: '32px', my: 'auto', mx: '10px', color: '#203F6F',}}>
            // @ts-expect-error TS(2339): Property 'user_name' does not exist on type 'never... Remove this comment to see the full error message
            { userProfiles ? userProfiles.user_name : 'Loading...' }
          </Typography> 
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography sx={{gridArea: '3 / 5 / 4 / 10', fontFamily: 'Roboto', fontSize: '24px', my: 'auto', mx: '10px', color: '#203F6F',}}>
            // @ts-expect-error TS(2339): Property 'user_id' does not exist on type 'never'.
            { userProfiles ? userProfiles.user_id : 'Loading...' }
          </Typography>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{gridArea: '4 / 6 / 5 / 8', display: 'flex', flexDirection: 'column',}}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#203F6F',}}>Following</Typography>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#203F6F',}}>-.--M</Typography>
          </Box>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{gridArea: '4 / 8 / 5 / 10', display: 'flex', flexDirection: 'column',}}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#203F6F',}}>Followers</Typography>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#203F6F',}}>-.--M</Typography>
          </Box>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{gridArea: '4 / 10 / 5 / 12', display: 'flex', flexDirection: 'column',}}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#203F6F',}}>Likes</Typography>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#203F6F',}}>-.--M</Typography>
          </Box>
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          sx ={{gridArea: '5 / 1 / 6 / 13', m: 'auto',}}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <StyledTab label="Singles" sx={{fontFamily: 'Roboto', color: 'rgba(32, 63, 111, 0.5)', }} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <StyledTab label="Albums" sx={{fontFamily: 'Roboto', color: 'rgba(32, 63, 111, 0.5)', }} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <StyledTab label="Playlists" sx={{fontFamily: 'Roboto', color: 'rgba(32, 63, 111, 0.5)', }} />
        </StyledTabs>
        {value === 0 && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'space-evenly', 
            flexWrap: 'wrap', 
            overflowY: 'auto',
          }} 
          ref={scrollContainerRef}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
          </Box>
        )}
        {value === 1 && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{
            gridArea: '6 / 1 / 12 / 13',
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'space-evenly', 
            flexWrap: 'wrap', 
            overflowY: 'auto',
          }} 
          ref={scrollContainerRef}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer', }}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer', }}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer', }}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer', }}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer', }}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer', }}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer', }}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer', }}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer', }}>
            </Paper>
          </Box>
        )}
        {value === 2 && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{
            gridArea: '6 / 1 / 12 / 13',
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'space-evenly', 
            flexWrap: 'wrap', 
            overflowY: 'auto',
          }} 
          ref={scrollContainerRef}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '5px', width: '25%', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
            </Paper>
          </Box>
        )}
      </Box>
    </Paper>
  );
}

export default AccountPanel;
