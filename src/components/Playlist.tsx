import * as React from 'react'; 
import { useParams } from 'react-router-dom';
import { Box, Paper, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Playlist = () => {
  const [playlist, setPlaylist] = React.useState(null);
  const { playlistId } = useParams();

  React.useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/playlist/${playlistId}/`)
      .then((res) => res.json())
      .then(data => {setPlaylist(data)})
  } ,[playlistId]);

  console.log(playlist);

  const [postDetails, setPostDetails] = React.useState([]);

  React.useEffect(() => {
    // @ts-expect-error TS(2339): Property 'posts' does not exist on type 'never'.
    if (playlist && playlist.posts) {
      // @ts-expect-error TS(2339): Property 'posts' does not exist on type 'never'.
      playlist.posts.map((post: any) => {
        fetch(`http://127.0.0.1:8000/api/post/${post}/`)
          .then((res) => res.json())
          // @ts-expect-error TS(2322): Type 'any' is not assignable to type 'never'.
          .then(data => {setPostDetails([...postDetails, data])})
      })
    }
  }, [playlist]);
  console.log(postDetails); 

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null); 
  };

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
        display: 'grid', 
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(12, 1fr)',
      }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Paper sx={{gridArea: '1 / 1 / 5 / 5', borderRadius: '15px', width: '100%', pt: '100%',}}>
        </Paper>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Typography sx={{gridArea: '2 / 5 / 3 / 10', fontFamily: 'Roboto', fontSize: '32px', my: 'auto', mx: '10px', color: '#3f3f3f',}}>
          // @ts-expect-error TS(2339): Property 'playlist_title' does not exist on type '... Remove this comment to see the full error message
          { playlist ? playlist.playlist_title : 'Loading...' }
        </Typography> 
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Typography sx={{gridArea: '3 / 5 / 4 / 10', fontFamily: 'Roboto', fontSize: '24px', my: 'auto', mx: '10px', color: '#3f3f3f',}}>
          // @ts-expect-error TS(2339): Property 'user_id' does not exist on type 'never'.
          { playlist ? playlist.user_id : 'Loading...' }
        </Typography>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{gridArea: '4 / 6 / 5 / 8', display: 'flex', flexDirection: 'column',}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>Liked</Typography>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>{ playlist ? playlist.playlist_loved_number : '--.-' }</Typography>
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{gridArea: '4 / 8 / 5 / 10', display: 'flex', flexDirection: 'column',}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>Saved</Typography>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>{ playlist ? playlist.playlist_saved_number : '--.-' }</Typography>
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{gridArea: '4 / 10 / 5 / 12', display: 'flex', flexDirection: 'column',}}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>Played</Typography>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>{ playlist ? playlist.playlist_played_times : '--.-' }</Typography>
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{gridArea: '5 / 1 / 13 / 13', display: 'flex', flexDirection: 'column', }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant='h4' sx={{fontFamily: 'Roboto',}}>Songs</Typography>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{display: 'flex', flexDirection: 'column', overflowY: 'auto', }}>
            {postDetails.map((post, index) => (
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Box key={index} sx={{mx: '2.5%', height: '100px', width: '95%', borderBottom: '1px', display: 'flex'}}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Paper sx={{m: '10px', height: '80px', aspectRatio: '1 / 1'}}>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <image src={post.image_url} alt={post.title} />
                </Paper>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Typography variant='body1' sx={{my: 'auto', ml: '10px', fontFamily: 'Roboto', fontSize: '24px'}}>{ playlist ? post.post_title : 'Loading...' }</Typography>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Typography variant='body1' sx={{my: 'auto', ml: '20%', fontFamily: 'Roboto', fontSize: '16px'}}>{ playlist ? post.user_id : 'Loading...' }</Typography>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Typography variant='body1' sx={{my: 'auto', ml: 'auto', fontFamily: 'Roboto', }}>{ playlist ? post.duration : '--:--' }</Typography>
                // @ts-expect-error TS(2769): No overload matches this call.
                <IconButton area-label="more" fontSize="medium" onClick={handleClick} sx={{ my: 'auto' }}>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <MoreVertIcon />
                </IconButton>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Menu
                  id={`simple-menu-${index}`}
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
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default Playlist;
