import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useBreakPoints } from './components/BreakPoint.jsx';
import { useTheme } from '@mui/material/styles';
import Menu from './components/menu.jsx';
import MainPlayer from './components/MainPlayer.jsx';
import Search from './components/Search.jsx';
import PlayingNext from './components/PlayingNext.jsx'
import TrendsBar from './components/TrendsBar.jsx'
import Box from '@mui/material/Box';

const Home = () => {

  const theme = useTheme();

  const { mdMatches, smMatches } = useBreakPoints();

  return (
    <div>
      <Box sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#F2F8FF',
        fontFamily: 'Roboto',
        color: '#203F6F', 
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(24, 1fr)',
      }}>
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
