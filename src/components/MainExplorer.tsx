import * as React from 'react';
import useMediaQuery from '@mui/system/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import { TabProps } from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { TabsProps } from '@mui/material/Tabs';

const StyledTabs = styled((props: TabsProps) => (
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
const StyledTab = styled((props: TabProps) => <Tab disableRipple {...props} />)(
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


interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel: React.FC<CustomTabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{ p: 3 }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

interface A11yProps {
  id: string;
  'aria-controls': string;
}

const a11yProps = (index: number): A11yProps => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MainExplorer = () => {
  const theme = useTheme();
  const mdmatches = useMediaQuery(theme.breakpoints.up('md'));
  const smMatches = useMediaQuery(theme.breakpoints.up('sm'));

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [hideSuggest, setHideSuggest] = React.useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && scrollContainerRef.current.scrollTop > 10) {
        setHideSuggest(true);
      } else {
        setHideSuggest(false);
      }
    }; 
    
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

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
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden', 
      }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Typography variant='h2' sx={{fontFamily: 'Roboto', color: '#203f6f', }}>Explore</Typography>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          transform: hideSuggest ? 'translateY(-125%)' : 'translateY(0)', 
          transition: 'transform 0.5s ease-in-out', 
        }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant='h4' sx={{fontFamily: 'Roboto', color: '#203f6f', }}>Suggest</Typography>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto'}}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 4 / 3 ', cursor: 'pointer'}} onClick={() => window.open('https://www.google.com')}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <img src="./suggest1.jpeg" alt='suggest1' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px',}} />
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 4 / 3 ', cursor: 'pointer'}} onClick={() => window.open('https://www.google.com')}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <img src="./suggest2.jpeg" alt='suggest2' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px',}} />
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 4 / 3 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 4 / 3 ', cursor: 'pointer',}}>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{m: '40px', height: '180px', aspectRatio: ' 4 / 3 ', cursor: 'pointer',}}>
            </Paper>
          </Box>
        </Box>
        
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          sx ={{mx: 'auto'}}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <StyledTab label="Playlists" sx={{fontFamily: 'Roboto', color: 'rgba(32, 63, 111, 0.5)', }} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <StyledTab label="Artists" sx={{fontFamily: 'Roboto', color: 'rgba(32, 63, 111, 0.5)', }} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <StyledTab label="Singles" sx={{fontFamily: 'Roboto', color: 'rgba(32, 63, 111, 0.5)', }} />
        </StyledTabs>
        {value === 0 && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{
            display: 'flex', 
            flexDirection: 'column',
            overflowY: 'auto',
          }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography variant='h4' sx={{fontFamily: 'Roboto', color: '#203f6f', }}>Playlists</Typography>
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
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
            </Box>
          </Box>
        )}
        {value === 1 && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{
            display: 'flex', 
            flexDirection: 'column',
            overflowY: 'auto',
          }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography variant='h4' sx={{fontFamily: 'Roboto', color: '#203f6f', }}>Artists</Typography>
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
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer', borderRadius: '50%', }}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer', borderRadius: '50%', }}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer', borderRadius: '50%', }}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer', borderRadius: '50%', }}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer', borderRadius: '50%', }}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer', borderRadius: '50%', }}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer', borderRadius: '50%', }}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer', borderRadius: '50%', }}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer', borderRadius: '50%', }}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer', borderRadius: '50%', }}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer', borderRadius: '50%', }}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer', borderRadius: '50%', }}>
              </Paper>
            </Box>
          </Box>
        )}
        {value === 2 && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{
            display: 'flex', 
            flexDirection: 'column',
            overflowY: 'auto',
          }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography variant='h4' sx={{fontFamily: 'Roboto', color: '#203f6f', }}>Singles</Typography>
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
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Paper sx={{m: '20px', width: '150px', aspectRatio: ' 1 / 1 ', cursor: 'pointer',}}>
              </Paper>
            </Box>
          </Box>
        )}
      </Box>
    </Paper>
      
  );
}

export default MainExplorer;
