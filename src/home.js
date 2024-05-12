import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu.jsx';
import MainPlayer from './components/MainPlayer.jsx';
import Search from './components/Search.jsx';
import Suggest from './components/Suggest.jsx'
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
  return (
    <div>
      <Box sx={style}>
        <TrendsBar />
        <Menu />
        <Routes>
          <Route path='/' element={<MainPlayer />} />
        </Routes>
        <Search />
        <Suggest />
        
      </Box>
    </div>
  );
};

export default Home;
