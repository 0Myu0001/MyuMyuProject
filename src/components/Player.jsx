import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import RepeatOneRoundedIcon from '@mui/icons-material/RepeatOneRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import IosShareIcon from '@mui/icons-material/IosShare';

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

const Player = () => {
  const [position, setPosition] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const [post, setPost] = React.useState(null);
  const postId = '*00000000*' ;

  const handleClickFavorite = () => setIsFavorite(!isFavorite);

  React.useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/post/${postId}/`)
      .then((res) => res.json())
      .then(data => setPost(data))
  }, [postId]);

  const [audio, setAudio] = React.useState(null);
  const [isPause, setIsPause] = React.useState(false);
  const handleClickPause = () => setIsPause(!isPause);

  React.useEffect(() => {
    if (post) {
      setAudio(new Audio(`http://127.0.0.1:8000${post.post}`));
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

  const handlePositionChange = (_, value) => {
    if (audio) {
      setPosition(value);
    }
  };

  const handlePositionChangeCommitted = (_, value) => {
    if (audio) {
      audio.currentTime = value;
    }
  };

  return(
    <Paper sx={{
        m: '5px',
        gridArea: '13 / 5 / 25 / 7',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 1fr)',
        gridTemplateRows: 'repeat(9, 1fr)',
      }}
      elevation = {6}
    >
      
      <Box sx={{gridArea: '2 / 2 / 5 / 5',}}>
        {/*以下のpaper要素が正方形にならない*/}
        <Paper sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            aspectRatio: '1/1',
          }} 
        >
          {post && <img src={`http://127.0.0.1:8000${post.post_image}`} alt="Post Image" style={{width: '100%', height: '100%', objectFit: 'contain'}} />}
        </Paper>
      </Box>
      <Box sx={{gridArea: '2 / 5 / 3 / 9', display: 'flex', flexDirection: 'column',}}>
        <Typography sx={{ml: '5%',fontFamily: 'Roboto', color: '#3f3f3f', fontSize: '20px', justifyContent: 'space-between'}}> {post ? post.post_title : 'Loading...'} </Typography>
        <Typography sx={{ml: '5%',fontFamily: 'Roboto', color: '#3f3f3f', fontSize: '15px', justifyContent: 'space-between'}}> {post ? post.user_id : 'Loading...'} </Typography>
      </Box>
      <Box sx={{mt: 'auto',gridArea: '3 / 5 / 5 / 9' ,display: 'flex', flexDirection: 'column'}}>
        <Box sx={{mx: '10px', display: 'flex', justifyContent: 'space-evenly'}}>
          <IconButton aria-label="return" size="large" sx={{m: 'auto',}}><KeyboardDoubleArrowLeftRoundedIcon fontSize="inherit" /></IconButton>
          <IconButton aria-label="pause" size="large" sx={{m: 'auto',}} onClick={handleClickPause}>
            {isPause ? <PauseRoundedIcon fontSize='inherit' /> : <PlayArrowRoundedIcon fontSize='inherit' />}
          </IconButton>
          <IconButton aria-label="skip" size="large" sx={{m: 'auto',}}><KeyboardDoubleArrowRightRoundedIcon fontSize="inherit" /></IconButton>
        </Box>
        <Box sx={{ml: 'auto',}}>
          <IconButton aria-label="repeat" size="medium" sx={{ m: 'auto' }}>
            <RepeatRoundedIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="shuffle" size="medium" sx={{ m: 'auto' }}>
            <ShuffleRoundedIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
      <Slider
        aria-label="time-indicator"
        size="small"
        value={position}
        min={0}
        step={1}
        max={duration}
        onChange={handlePositionChange}
        onChangeCommitted={handlePositionChangeCommitted}
        sx={{
          gridArea: '6 / 2 / 7 / 9',
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
          gridArea: '6 / 2 / 7 / 9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TinyText>{formatDuration(Math.floor(position))}</TinyText>
        <TinyText>-{formatDuration(Math.floor(duration - position))}</TinyText>
      </Box>
      <Box sx={{gridArea: '8 / 2 / 9 / 6', display: 'flex',}}>
        <IconButton aria-label="love" size="large" sx={{m: 'auto'}} onClick={handleClickFavorite}>
          {isFavorite ? <FavoriteRoundedIcon fontSize="inherit" sx={{color: '#F06060'}} /> : <FavoriteBorderRoundedIcon fontSize="inherit" />}
        </IconButton>
        <IconButton area-label="addLibrary" size="large" sx={{m: 'auto'}}>
          <AddCircleOutlineRoundedIcon fontSize="inherit"/>
        </IconButton>
        <IconButton area-label="share" size="large" sx={{m: 'auto'}}>
          <IosShareIcon fontSize='inherit'/>
        </IconButton>
      </Box>
      <Box  sx={{gridArea: '8 / 6 / 9 / 9',}}>
        <Link to='/'>
          <Button variant='outlined' sx={{
              height: '100%', 
              width: '100%', 
              fontSize: '16px',
              fontFamily: 'Roboto',
            }}
          >more details</Button>
        </Link>
      </Box>
      
    </Paper>
  );
}

export default Player;
