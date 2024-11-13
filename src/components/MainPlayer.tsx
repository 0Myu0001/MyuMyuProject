import * as React from 'react';
// @ts-expect-error TS(6142): Module './PlayerProvider' was resolved to '/Users/... Remove this comment to see the full error message
import { usePlayer } from './PlayerProvider';
// @ts-expect-error TS(6142): Module './BreakPoint' was resolved to '/Users/kei/... Remove this comment to see the full error message
import { useBreakPoints } from './BreakPoint';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import RepeatOneRoundedIcon from '@mui/icons-material/RepeatOneRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import { Button, CardActions, CardContent } from '@mui/material';


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
      color: '#203f6f',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);


const CustomTabPanel = (props: any) => {
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

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const formatDuration = (value: any) => {
  const minute = Math.floor(value / 60);
  const secondLeft = value - minute * 60;
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
}

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};


const MainPlayer = () => {
  // @ts-expect-error TS(2339): Property 'post' does not exist on type 'unknown'.
  const {post, user, position, duration, isFavorite, setIsFavorite, isPause, handleClickPause,  handlePositionChange, handlePositionChangeCommitted, draggingValue, handleClickRepeat, handleClickShuffle, isRepeat, isShuffle, value, handleChange} = usePlayer();

  const [isHovered, setIsHovered] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [openComments, setOpenComments] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { mdMatches, smMatches } = useBreakPoints();

  const open = Boolean(anchorEl); 
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenDetails = () => setOpenDetails(true);
  const handleOpenComments =() => setOpenComments(true);
  const handleCloseDetails = () => setOpenDetails(false);
  const handleCloseComments = () => setOpenComments(false);
  const handleClickFavorite = () => setIsFavorite(!isFavorite);

  return(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Paper 
      sx = {{m: '5px', gridArea: '2 / 2 / 25 / 5', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px',}}
      elevation = {6}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box sx = {{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(12, 1fr)',
      }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          sx ={{gridArea: '1 / 1 / 2 / 13', m: 'auto',}}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <StyledTab label="Recommend" sx={{fontFamily: 'Roboto', color: 'rgba(32, 63, 111, 0.5)'}} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <StyledTab label="Playlist" sx={{fontFamily: 'Roboto', color: 'rgba(32, 63, 111, 0.5)'}} />
        </StyledTabs>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{
          gridArea: '2 / 4 / 7 / 10',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Paper elevation='6' sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            aspectRatio: ' 1 / 1 ',
            borderRadius: '10px',
            '&:hover': {
              filter: 'brightness(50%)',
            }, 
          }}
          onClick={handleClickPause}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {post && <img src={post.post_image} alt="Post Image" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px',}} />}
            
          </Paper>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {isHovered && (isPause ? <PauseRoundedIcon fontSize="large" sx={{position: 'absolute', color: '#FFFFFF',}} /> : <PlayArrowRoundedIcon fontSize='large' sx={{position: 'absolute', color: '#FFFFFF',}} />)}
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IconButton aria-label="return" size="large" sx={{
          gridArea: '4 / 2 / 5 / 3',
        }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <KeyboardDoubleArrowLeftRoundedIcon fontSize="inherit" />
        </IconButton>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IconButton aria-label="skip" size="large" sx={{
        gridArea: '4 / 11 / 5 / 12',
        }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <KeyboardDoubleArrowRightRoundedIcon fontSize="inherit" />
        </IconButton>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{my: '20px',gridArea: '5 / 11 / 7 / 12', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconButton aria-label="repeat" size="medium" onClick={handleClickRepeat} sx={{ m: 'auto' }}>
            {
              isRepeat === 0 ? (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <RepeatRoundedIcon fontSize="inherit" />
              ) : isRepeat === 1 ? (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <RepeatRoundedIcon fontSize="inherit" color="primary" />
                
              ) : (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <RepeatOneRoundedIcon fontSize="inherit" color="primary" />
              )
            }
          </IconButton>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconButton aria-label="shuffle" size="medium" onClick={handleClickShuffle} sx={{ m: 'auto' }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {isShuffle ? <ShuffleRoundedIcon fontSize="inherit" color="primary" /> : <ShuffleRoundedIcon fontSize="inherit" />}
          </IconButton>
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{gridArea: '7 / 2 / 8 / 3 '}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {post && (user ? <img src={user.user_image} alt='user image' style={{height: '100%', width: '100%', borderRadius: '50%'}}/> : null)}
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{gridArea: '7 / 3 / 8 / 9', display: 'flex'}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography variant="body1" sx={{
              color: '#203f6f', 
              fontSize: '25px',
              fontFamily: 'Roboto',
            }}>
              {post ? post.post_title : 'Loading...'}
            </Typography>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography variant="body1" sx={{
              color: '#203f6f', 
              fontSize: '20px',
              fontFamily: 'Roboto',
            }}>
              {post ? post.user_id : 'Loading...'}
            </Typography>
          </Box>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{display: 'flex'}}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button variant='contained' sx={{ 
              ml: '20px',
              mt: 'auto',
              textTransform: "none", 
              fontFamily: 'Roboto',
            }}>
              Follow
            </Button>
          </Box>
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{ gridArea: '7 / 9 / 8 / 12', display: 'flex', mt: 'auto', }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconButton aria-label="love" size="medium" onClick={ handleClickFavorite } sx={{ m: 'auto' }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {isFavorite ? <FavoriteRoundedIcon fontSize="inherit" /> : <FavoriteBorderRoundedIcon fontSize="inherit" />}
          </IconButton>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconButton area-label="addLibrary" size="medium" sx={{ m: 'auto' }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AddCircleOutlineRoundedIcon fontSize="inherit"/>
          </IconButton>
          // @ts-expect-error TS(2769): No overload matches this call.
          <IconButton area-label="share" fontSize="medium" sx={{ m: 'auto' }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IosShareIcon />
          </IconButton>
          {/* 必要かわからない */}
          // @ts-expect-error TS(2769): No overload matches this call.
          <IconButton area-label="more" fontSize="medium" onClick={handleClick} sx={{ m: 'auto' }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <MoreVertRoundedIcon />
          </IconButton>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Slider
          aria-label="time-indicator"
          size="small"
          value={draggingValue !== null ? draggingValue : position}
          onChange={handlePositionChange}
          onChangeCommitted={handlePositionChangeCommitted}
          min={0}
          step={1}
          max={duration}
          sx={{
            gridArea: '8 / 2 / 9 / 12',
            color: 'rgba(0,0,0,0.87)',
            height: 4,
           '& .MuiSlider-thumb': {
              width: 10,
              height: 10,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&::before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: '0px 0px 0px 8px rgb(0 0 0 / 16%)',
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box
          sx={{
            gridArea: '8 / 2 / 9 / 12',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TinyText>{formatDuration(Math.floor(position))}</TinyText>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TinyText>-{formatDuration(Math.floor(duration - position))}</TinyText>
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card sx={{ gridArea: '9 / 2 / 12 / 7', }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography sx={{
              color: '#203f6f',
              fontFamily: 'Roboto',
            }}>
              Details
            </Typography>
          </CardContent>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardActions>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button 
              onClick={handleOpenDetails}
              sx={{
                color: '#3278F0',
                fontFamily: 'Roboto',
                textTransform: "none",
              }}>Read More
            </Button>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Modal 
              open={openDetails}
              onClose={handleCloseDetails}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Box sx={modalStyle}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Details
                </Typography>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Here in details.
                </Typography>
              </Box>
            </Modal>
          </CardActions>
        </Card>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card sx={{
          gridArea: '9 / 7 / 12 / 12',
        }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardContent>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography sx={{
              color: '#203f6f',
              fontFamily: 'Roboto',
            }}>
              Comments
            </Typography>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography sx={{
              color: '#203f6f',
              fontFamily: 'Roboto',
            }}>
              Here in comments.Here in comments.Here in comments.Here in 
            </Typography>
          </CardContent>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CardActions>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button 
              onClick={handleOpenComments}
              sx={{
                color: '#3278F0',
                fontFamily: 'Roboto',
                textTransform: "none",
              }}
            >Read More
            </Button>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Modal 
              open={openComments}
              onClose={handleCloseComments}
              aria-labelledby="modal-comments-title"
              aria-describedby="modal-comments-description"
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Box sx={modalStyle}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Typography id="modal-comments-title" variant="h6" component="h2">
                  Comments
                </Typography>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Typography id="modal-comments-description" sx={{ mt: 2 }}>
                  Here in comments.Here in comments.Here in comments.Here in comments.Here in comments.Here in comments.Here in comments.
                </Typography>
              </Box>
            </Modal>
          </CardActions>
        </Card>


      </Box>
    </Paper>
        
  );
}

export default MainPlayer;
