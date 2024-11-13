import * as React from 'react'; 
import Box from '@mui/material/Box'; 

const MobileExplorer = () => {
  return(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box></Box>
  )
}

export default MobileExplorer; 