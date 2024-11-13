import * as React from 'react'; 
import { useDropzone } from 'react-dropzone';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';


const Create = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Paper 
      sx = {{m: '5px', gridArea: '2 / 2 / 25 / 5', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px',}}
      elevation = {6}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{ height: '50%', }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant='h4' sx={{p: '20px', fontFamily: 'Roboto', color: '#203f6f'}}>
            Drag files here to upload 
          </Typography>
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{ height: '50%', }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant='h4' sx={{p: '20px', fontFamily: 'Roboto', color: '#203f6f'}}>
            link to MyuMyu for Creator
          </Typography>
        </Box>

      </Box>
    </Paper>
  );
}

export default Create;