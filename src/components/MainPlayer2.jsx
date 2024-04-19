//以下Tab追加時使用
/*

<Box sx = {{gridArea: '1 / 3 / 2 / 11',}}>
<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
  <Tab label="Suggest" {...a11yProps(0)} />
  <Tab label="Playlist" {...a11yProps(1)} />
  <Tab label='a' {...a11yProps(3)} />
</Tabs>
</Box>
<Box sx = {{gridArea: '2 / 1 / 13 / 13'}}>
<CustomTabPanel value={value} index={0} >
<Box sx={{
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridTemplateRows: 'repeat(12, 1fr)',}}>
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
@MyuMyu_Official
</Typography>
<IconButton aria-label="love" size="medium" sx={{
gridArea: '7 / 9 / 8 / 10',
mt: 'auto',
}}>
<FavoriteBorderRoundedIcon fontSize="inherit" />
</IconButton>
<IconButton area-label="addLibrary" size="medium" sx={{
gridArea: '7 / 10 / 8 / 11',
mt: 'auto',
}}>
<AddCircleOutlineRoundedIcon fontSize="inherit"/>
</IconButton>
<Box sx={{gridArea: '7 / 11 / 8 / 12',}}>
<IconButton area-label="share" fontSize="medium" sx={{
  height:'100%',
  width: '100%',
}}>
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
<TinyText>{formatDuration(position)}</TinyText>
<TinyText>-{formatDuration(duration - position)}</TinyText>
</Box>
<Card sx={{
  gridArea: '9 / 2 / 12 / 7',
}}>
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
    }}>Read More</Button>
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
    >Read More</Button>
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

</CustomTabPanel>

</Box>
<CustomTabPanel value={value} index={1}>

</CustomTabPanel>

*/
