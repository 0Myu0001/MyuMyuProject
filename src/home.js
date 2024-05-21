import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menu from './components/menu.jsx';
import MainPlayer from './components/MainPlayer.jsx';
import Search from './components/Search.jsx';
import PlayingNext from './components/PlayingNext.jsx'
import TrendsBar from './components/TrendsBar.jsx'
import Box from '@mui/material/Box';

const style = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#EBF5FB',
  fontFamily: 'Noto Sans JP',
  color: '#3F3F3F',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(24, 1fr)',
}

const Home = () => {

  const theme = useTheme();
  const mdMatches = useMediaQuery(theme.breakpoints.up('(min-width:960px)'));
  const smMatches = useMediaQuery(theme.breakpoints.up('(min-width:450px)'));

  return (
    <div>
      <Box sx={style}>
        <TrendsBar />
        <Menu />
        <Routes>
          <Route path='/' element={<MainPlayer />} />
        </Routes>
        <Search />
        <PlayingNext />
        
      </Box>
    </div>
  );
};

export default Home;
