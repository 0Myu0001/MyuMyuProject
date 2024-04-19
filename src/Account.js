import * as React from 'react';
import Box from '@mui/material/Box';
import TrendsBar from './components/TrendsBar';
import Menu from './components/menu';
import AccountPanel from './components/AccountPanel';
import Search from './components/Search';
import Player from './components/Player';

const Account = () => {
  return(
    <div>
      <Box sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#EBF5FB',
        fontFamily: 'Noto Sans JP',
        color: '#3F3F3F',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(24, 1fr)',
      }}>
        <TrendsBar />
        <Menu />
        <AccountPanel />
        <Search />
        <Player />
      </Box>
    </div>
  );
}

export default Account;
