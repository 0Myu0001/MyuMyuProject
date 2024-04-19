import * as React from 'react';
import Typography from '@mui/material/Typography';

const TrendsBar = () => {
    return(
        <Typography variant="body1" sx={{
            fontSize: '1.6vw',
            height: 'auto',
            lineHeight: 1,
            borderBottom: '1px solid black',
            gridArea: ' 1 / 1 / 2 / 7',
            fontFamily: 'Noto Sans JP',
          }}>
            #MyuMyu
          </Typography>
    );
}

export default TrendsBar;
