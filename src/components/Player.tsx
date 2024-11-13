import * as React from 'react';
import { Link } from 'react-router-dom';
// @ts-expect-error TS(6142): Module './PlayerProvider' was resolved to '/Users/... Remove this comment to see the full error message
import { usePlayer } from './PlayerProvider';
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

const Player = () => {
  // @ts-expect-error TS(2339): Property 'post' does not exist on type 'unknown'.
  const {post, position, duration, isFavorite, setIsFavorite, isPause, handleClickPause,  handlePositionChange, handlePositionChangeCommitted, draggingValue, handleClickRepeat, handleClickShuffle, isRepeat, isShuffle} = usePlayer();

  const handleClickFavorite = () => setIsFavorite(!isFavorite);

  return(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
      
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box sx={{gridArea: '2 / 2 / 5 / 5',}}>
        {/*以下のpaper要素が正方形にならない*/}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Paper sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            aspectRatio: '1/1',
          }} 
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {post && <img src={post.post_image} alt="Post" style={{width: '100%', height: '100%', objectFit: 'contain'}} />}
        </Paper>
      </Box>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box sx={{gridArea: '2 / 5 / 3 / 9', display: 'flex', flexDirection: 'column',}}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Typography sx={{ml: '5%',fontFamily: 'Roboto', color: '#203f6f', fontSize: '20px', justifyContent: 'space-between'}}> {post ? post.post_title : 'Loading...'} </Typography>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Typography sx={{ml: '5%',fontFamily: 'Roboto', color: '#203f6f', fontSize: '15px', justifyContent: 'space-between'}}> {post ? post.user_id : 'Loading...'} </Typography>
      </Box>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box sx={{mt: 'auto',gridArea: '3 / 5 / 5 / 9' ,display: 'flex', flexDirection: 'column'}}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{mx: '10px', display: 'flex', justifyContent: 'space-evenly'}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconButton aria-label="return" size="large" sx={{m: 'auto',}}><KeyboardDoubleArrowLeftRoundedIcon fontSize="inherit" /></IconButton>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconButton aria-label="pause" size="large" sx={{m: 'auto',}} onClick={handleClickPause}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {isPause ? <PauseRoundedIcon fontSize='inherit' /> : <PlayArrowRoundedIcon fontSize='inherit' />}
          </IconButton>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconButton aria-label="skip" size="large" sx={{m: 'auto',}}><KeyboardDoubleArrowRightRoundedIcon fontSize="inherit" /></IconButton>
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{ml: 'auto',}}>
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
      </Box>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Slider
        aria-label="time-indicator"
        size="small"
        value={draggingValue !== null ? draggingValue : position}
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
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box
        sx={{
          gridArea: '6 / 2 / 7 / 9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TinyText>{formatDuration(Math.floor(position))}</TinyText>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TinyText>-{formatDuration(Math.floor(duration - position))}</TinyText>
      </Box>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box sx={{gridArea: '8 / 2 / 9 / 6', display: 'flex',}}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IconButton aria-label="love" size="large" sx={{m: 'auto'}} onClick={handleClickFavorite}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {isFavorite ? <FavoriteRoundedIcon fontSize="inherit" sx={{color: '#F06060'}} /> : <FavoriteBorderRoundedIcon fontSize="inherit" />}
        </IconButton>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IconButton area-label="addLibrary" size="large" sx={{m: 'auto'}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AddCircleOutlineRoundedIcon fontSize="inherit"/>
        </IconButton>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IconButton area-label="share" size="large" sx={{m: 'auto'}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IosShareIcon fontSize='inherit'/>
        </IconButton>
      </Box>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box  sx={{gridArea: '8 / 6 / 9 / 9',}}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Link to='/'>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
