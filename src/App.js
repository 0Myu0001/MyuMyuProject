import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import MenuList from './components/menu.jsx';
import MainPlayer from './components/MainPlayer.jsx';
import MainExplorer from './components/MainExplorer.jsx';
import MainLibrary from './components/MainLibrary.jsx';
import NotificationWindow from './components/NotificationWindow.jsx';
import AccountPanel from './components/AccountPanel.jsx';
import Search from './components/Search.jsx';
import Player from './components/Player.jsx';
import TrendsBar from './components/TrendsBar.jsx';
import Box from '@mui/material/Box';

const style = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#F2F8FF',
  fontFamily: 'Roboto',
  color: '#3F3F3F',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(24, 1fr)',
}

const App = () => {
  return (
    <div>
      <Box sx={style}>
        <TrendsBar />
        <MenuList />
        <Routes>
          <Route path='/explore' element={<MainExplorer />} />
          <Route path='/library' element={<MainLibrary />} />
          <Route path='/notification' element={<NotificationWindow />} />
          <Route path='/account' element={<AccountPanel/>} />
        </Routes>
        <Search />
        <Player />
      </Box>
    </div>
  );
};

export default App;

