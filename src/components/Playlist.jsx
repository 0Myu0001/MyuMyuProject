import * as React from 'react'; 
import { useParams } from 'react-router-dom';
import { Box, Paper, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Playlist = () => {
  const [playlist, setPlaylist] = React.useState(null);
  const { playlistId } = useParams();

  React.useEffect(() => {
    fetch(`http://192.168.11.14:8000/api/playlist/${playlistId}/`)
      .then((res) => res.json())
      .then(data => {setPlaylist(data)})
  } ,[playlistId]);

  console.log(playlist);

  const [postDetails, setPostDetails] = React.useState([]);

  React.useEffect(() => {
    if (playlist && playlist.posts) {
      playlist.posts.map((post) => {
        fetch(`http://192.168.11.14:8000/api/post/${post}/`)
          .then((res) => res.json())
          .then(data => {setPostDetails([...postDetails, data])})
      })
    }
  }, [playlist]);
  console.log(postDetails); 

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null); 
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
        <Typography sx={{gridArea: '2 / 5 / 3 / 10', fontFamily: 'Roboto', fontSize: '32px', my: 'auto', mx: '10px', color: '#3f3f3f',}}>
          { playlist ? playlist.playlist_title : 'Loading...' }
        </Typography> 
        <Typography sx={{gridArea: '3 / 5 / 4 / 10', fontFamily: 'Roboto', fontSize: '24px', my: 'auto', mx: '10px', color: '#3f3f3f',}}>
          { playlist ? playlist.user_id : 'Loading...' }
        </Typography>
        <Box sx={{gridArea: '4 / 6 / 5 / 8', display: 'flex', flexDirection: 'column',}}>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>Liked</Typography>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>{ playlist ? playlist.playlist_loved_number : '--.-' }</Typography>
        </Box>
        <Box sx={{gridArea: '4 / 8 / 5 / 10', display: 'flex', flexDirection: 'column',}}>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>Saved</Typography>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>{ playlist ? playlist.playlist_saved_number : '--.-' }</Typography>
        </Box>
        <Box sx={{gridArea: '4 / 10 / 5 / 12', display: 'flex', flexDirection: 'column',}}>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>Played</Typography>
          <Typography variant='body1' sx={{fontFamily: 'Roboto', fontSize: '16px', m: 'auto', color: '#3f3f3f',}}>{ playlist ? playlist.playlist_played_times : '--.-' }</Typography>
        </Box>
        <Box sx={{gridArea: '5 / 1 / 13 / 13', display: 'flex', flexDirection: 'column', }}>
          <Typography variant='h4' sx={{fontFamily: 'Roboto',}}>Songs</Typography>
          <Box sx={{display: 'flex', flexDirection: 'column', overflowY: 'auto', }}>
            {postDetails.map((post, index) => (
              <Box key={index} sx={{mx: '2.5%', height: '100px', width: '95%', borderBottom: '1px', display: 'flex'}}>
                <Paper sx={{m: '10px', height: '80px', aspectRatio: '1 / 1'}}>
                  <image src={post.image_url} alt={post.title} />
                </Paper>
                <Typography variant='body1' sx={{my: 'auto', ml: '10px', fontFamily: 'Roboto', fontSize: '24px'}}>{ playlist ? post.post_title : 'Loading...' }</Typography>
                <Typography variant='body1' sx={{my: 'auto', ml: '20%', fontFamily: 'Roboto', fontSize: '16px'}}>{ playlist ? post.user_id : 'Loading...' }</Typography>
                <Typography variant='body1' sx={{my: 'auto', ml: 'auto', fontFamily: 'Roboto', }}>{ playlist ? post.duration : '--:--' }</Typography>
                <IconButton area-label="more" fontSize="medium" onClick={handleClick} sx={{ my: 'auto' }}>
                  <MoreVertIcon />
                </IconButton>
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
                  <MenuItem onClick={handleClose}>Analyze</MenuItem>
                  <MenuItem onClick={handleClose}>Account Setting</MenuItem>
                  <MenuItem onClick={handleClose}>Privacy Setting</MenuItem>
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
