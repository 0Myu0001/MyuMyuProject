import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from './components/menu.jsx';
import TrendsBar from './components/TrendsBar.jsx';
import Player from './components/Player.jsx';
import Search from './components/Search.jsx';
import NotificationWindow from './components/NotificationWindow.jsx';

const Notification = () => {
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
                <Menu />
                <TrendsBar />
                <NotificationWindow />
                <Search />
                <Player />
            </Box>
        </div>
    );
}

export default Notification;
