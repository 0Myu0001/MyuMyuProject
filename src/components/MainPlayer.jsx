import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import IosShareIcon from '@mui/icons-material/IosShare';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { Button, CardActions, CardContent } from '@mui/material';

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

const formatDuration = (value) => {
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
  const [value, setValue] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [openComments, setOpenComments] = React.useState(false);

  const [post, setPost] = React.useState(null);
  const postId = 60001;

  const handleOpenDetails = () => setOpenDetails(true);
  const handleOpenComments =() => setOpenComments(true);
  const handleCloseDetails = () => setOpenDetails(false);
  const handleCloseComments = () => setOpenComments(false);
  const handleClickFavorite = () => setIsFavorite(!isFavorite);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/post/${postId}/`)
      .then((res) => res.json())
      .then(data => setPost(data))
  } ,[postId]);

  const [audio, setAudio] = React.useState(null);
  const [isPause, setIsPause] = React.useState(false);
  const handleClickPause = () => setIsPause(!isPause);

  React.useEffect(() => {
    if (post) {
      setAudio(new Audio(post.post));
    }
  }, [post]);

  React.useEffect(() => {
    if (audio) {
      isPause ? audio.play(): audio.pause();
    }
  }, [isPause, audio]);

  React.useEffect(() => {
    if (audio) {
      setDuration(audio.duration);
  
      audio.ontimeupdate = () => {
        setPosition(audio.currentTime);
      };
    }
  }, [audio]);

  React.useEffect(() => {
    if (audio) {
      const handleCanPlayThrough = () => {
        setDuration(audio.duration);
      };
  
      audio.addEventListener('canplaythrough', handleCanPlayThrough);
        
      return () => {
        audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      };
    }
  }, [audio]);

  return(
    <Paper 
      sx = {{m: '5px', gridArea: '2 / 2 / 25 / 5', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px',}}
      elevation = {6}
    >
      <Box sx = {{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(12, 1fr)',
      }}>
        <Paper elevation='6' sx={{
          gridArea: '2 / 4 / 7 / 10',
        }}>
        </Paper>
        <IconButton aria-label="return" size="large" sx={{
          gridArea: '4 / 2 / 5 / 3',
        }}>
          <KeyboardDoubleArrowLeftRoundedIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="skip" size="large" sx={{
        gridArea: '4 / 11 / 5 / 12',
        }}>
          <KeyboardDoubleArrowRightRoundedIcon fontSize="inherit" />
        </IconButton>
        <Typography variant="body1" sx={{
          mt: 'auto',
          gridArea: '7 / 3 / 8 / 6',
          fontColor: '#3f3f3f', 
          fontSize: '20px',
          fontFamily: 'Noto Sans JP',
        }}>
          {post ? post.user_id : 'Loading...'}
        </Typography>
        <Box sx={{ gridArea: '7 / 9 / 8 / 12', display: 'flex', mt: 'auto', }}>
          <IconButton aria-label="love" size="medium" onClick={ handleClickFavorite } sx={{ m: 'auto' }}>
            {isFavorite ? <FavoriteRoundedIcon fontSize="inherit" /> : <FavoriteBorderRoundedIcon fontSize="inherit" />}
          </IconButton>
          <IconButton area-label="addLibrary" size="medium" sx={{ m: 'auto' }}>
            <AddCircleOutlineRoundedIcon fontSize="inherit"/>
          </IconButton>
          <IconButton area-label="share" fontSize="medium" sx={{ m: 'auto' }}>
            <IosShareIcon />
          </IconButton>
        </Box>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value)}
          sx={{
            gridArea: '8 / 2 / 9 / 12',
            color: 'rgba(0,0,0,0.87)',
            height: 4,
           '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
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
        <Box
          sx={{
            gridArea: '8 / 2 / 9 / 12',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(Math.floor(position))}</TinyText>
          <TinyText>-{formatDuration(Math.floor(duration - position))}</TinyText>
        </Box>
        <Card sx={{ gridArea: '9 / 2 / 12 / 7', }}>
          <CardContent>
            <Typography sx={{
              color: '#3f3f3f',
              fontFamily: 'Noto Sans JP',
            }}>
              Details
            </Typography>
          </CardContent>
          <CardActions>
            <Button 
              onClick={handleOpenDetails}
              sx={{
                color: '#3278F0',
                fontFamily: 'Noto Sans JP',
                textTransform: "none",
              }}>Read More
            </Button>
            <Modal 
              open={openDetails}
              onClose={handleCloseDetails}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Details
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Here in details.
                </Typography>
              </Box>
            </Modal>
          </CardActions>
        </Card>
        <Card sx={{
          gridArea: '9 / 7 / 12 / 12',
        }}>
          <CardContent>
            <Typography sx={{
              color: '#3f3f3f',
              fontFamily: 'Noto Sans JP',
            }}>
              Comments
            </Typography>
            <Typography sx={{
              color: '#3f3f3f',
              fontFamily: 'Noto Sans JP',
            }}>
              Here in comments.Here in comments.Here in comments.Here in 
            </Typography>
          </CardContent>
          <CardActions>
            <Button 
              onClick={handleOpenComments}
              sx={{
                color: '#3278F0',
                fontFamily: 'Noto Sans JP',
                textTransform: "none",
              }}
            >Read More
            </Button>
            <Modal 
              open={openComments}
              onClose={handleCloseComments}
              aria-labelledby="modal-comments-title"
              aria-describedby="modal-comments-description"
            >
              <Box sx={modalStyle}>
                <Typography id="modal-comments-title" variant="h6" component="h2">
                  Comments
                </Typography>
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
