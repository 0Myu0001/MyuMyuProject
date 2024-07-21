import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useBreakPoints } from './components/BreakPoint.jsx';
import MenuList from './components/menu.jsx';
import MainPlayer from './components/MainPlayer.jsx';
import MainExplorer from './components/MainExplorer.jsx';
import MainLibrary from './components/MainLibrary.jsx';
import Playlist from './components/Playlist.jsx';
import Create from './components/Create.jsx';
import NotificationWindow from './components/NotificationWindow.jsx';
import AccountPanel from './components/AccountPanel.jsx';
import Search from './components/Search.jsx';
import Player from './components/Player.jsx';
import TrendsBar from './components/TrendsBar.jsx';
import Box from '@mui/material/Box';

const App = () => {
  const { mdMatches, smMatches } = useBreakPoints();

  return (
    <div>
      <Box sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#F2F8FF',
        fontFamily: 'Roboto',
        color: '#203f6f',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(24, 1fr)',
      }}>
        <TrendsBar />
        <MenuList />
        <Routes>
          <Route path='/explore' element={<MainExplorer />} />
          <Route path='/library' element={<MainLibrary />} />
          <Route path='/notification' element={<NotificationWindow />} />
          <Route path='/account' element={<AccountPanel/>} />
          <Route path='/create' element={<Create />} />
          <Route path='/playlist/:playlistId' element={<Playlist />} />
        </Routes>
        <Search />
        <Player />
      </Box>
    </div>
  );
};

export default App;

