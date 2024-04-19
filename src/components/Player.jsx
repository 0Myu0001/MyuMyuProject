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
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import IosShareIcon from '@mui/icons-material/IosShare';

const duration = 200;

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
  const [position, setPosition] = React.useState(32);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isPause, setIsPause] = React.useState(false);
  const handleClickFavorite = () => setIsFavorite(!isFavorite);
  const handleClickPause = () => setIsPause(!isPause);


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
      <Paper sx={{gridArea: '2 / 2 / 5 / 5',}}>
      </Paper>
      <Box sx={{gridArea: '2 / 5 / 3 / 9', display: 'flex', flexDirection: 'column',}}>
        <Typography sx={{ml: '5%',fontFamily: 'Noto Sans JP', color: '#3f3f3f', fontSize: '20px', justifyContent: 'space-between'}}>Music Name</Typography>
        <Typography sx={{ml: '5%',fontFamily: 'Noto Sans JP', color: '#3f3f3f', fontSize: '15px', justifyContent: 'space-between'}}>@MyuMyuOfficial</Typography>
      </Box>
      <Box sx={{gridArea: '3 / 5 / 5 / 9' ,display: 'flex',}}>
        <IconButton aria-label="return" size="large" sx={{m: 'auto',}}><KeyboardDoubleArrowLeftRoundedIcon fontSize="inherit" /></IconButton>
        <IconButton aria-label="pause" size="large" sx={{m: 'auto',}} onClick={handleClickPause}>
          {isPause ? <PlayArrowRoundedIcon fontSize='inherit' /> : <PauseRoundedIcon fontSize='inherit' />}
        </IconButton>
        <IconButton aria-label="skip" size="large" sx={{m: 'auto',}}><KeyboardDoubleArrowRightRoundedIcon fontSize="inherit" /></IconButton>
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
        <TinyText>{formatDuration(position)}</TinyText>
        <TinyText>-{formatDuration(duration - position)}</TinyText>
      </Box>
      <Box sx={{gridArea: '8 / 2 / 9 / 6', display: 'flex',}}>
        <IconButton aria-label="love" size="large" sx={{m: 'auto'}} onClick={handleClickFavorite}>
          {isFavorite ? <FavoriteRoundedIcon fontSize="inherit" /> : <FavoriteBorderRoundedIcon fontSize="inherit" />}
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
              fontFamily: 'Noto Sans JP',
            }}
          >more details</Button>
        </Link>
      </Box>
      
    </Paper>
  );
}

export default Player;
