import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from './components/menu.jsx';
import TrendsBar from './components/TrendsBar.jsx';
import Search from './components/Search.jsx';
import Player from './components/Player.jsx';
import MainExplorer from './components/MainExplorer.jsx';

const Explore = () => {
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
                <MainExplorer />
                <Search />
                <Player />
            </Box>
        </div>
    );
}

export default Explore;
