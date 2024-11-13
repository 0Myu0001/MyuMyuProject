import * as React from 'react';
import Typography from '@mui/material/Typography';

const TrendsBar = () => {
    return(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Typography variant="body1" sx={{
            fontSize: '1.6vw',
            height: 'auto',
            lineHeight: 1,
            borderBottom: '1px solid black',
            gridArea: ' 1 / 1 / 2 / 7',
            fontFamily: 'Roboto',
          }}>
            #MyuMyu
          </Typography>
    );
}

export default TrendsBar;
