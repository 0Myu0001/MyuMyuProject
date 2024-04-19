import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Suggest = () => {
    return(
        <Box sx={{
            gridArea: '13 / 5 / 25 / 7',
        }}>
            <Typography sx={{fontFamily: 'Noto Sans JP', fontSize: '20px',color: '#3f3f3f',}}>
                Trends
            </Typography>
            <Typography sx={{fontFamily: 'Noto Sans JP', color: '#3f3f3f',}}>
                Top Songs Today
            </Typography>
            {/*画像ファイルを入れる*/}
            <Typography sx={{fontFamily: 'Noto Sans JP', color: '#3f3f3f',}}>
                Trending
            </Typography>
            {/*画像ファイルを入れる*/}
        </Box>
    );
}

export default Suggest;
