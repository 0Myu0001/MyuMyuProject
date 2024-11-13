import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// @ts-expect-error TS(2339): Property 'isactive' does not exist on type 'BoxOwn... Remove this comment to see the full error message
const AnimatedBox = styled(Box)(({ theme, isactive }) => ({
  transition: 'all 0.5s ease', // トランジションの設定
  opacity: isactive ? 0 : 1, // isInputActiveがtrueなら透過度を0に、そうでなければ1に
  transform: isactive ? 'translateY(20px)' : 'translateY(0)', // isInputActiveがtrueなら下に移動
}));

const Search = () => {
  const [isInputActive, setIsInputActive] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState([]);

  const handleFocus = () => {
    setIsInputActive(true);
    // 提案するデータのロジック
  }

  const handleBlur = () => {
    setIsInputActive(false);
  }

  const handleChange = (event: any) => {
    const { value } = event.target;
    if (value.length > 0) {
      // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'never'.
      setSuggestions(['suggestion1', 'suggestion2', 'suggestion3']);
    } else {
      setSuggestions([]);
    }
  }
  return(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box sx = {{ gridArea: ' 2 / 5 / 13 / 7', display: 'flex', flexDirection: 'column',}}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Paper
        component="form"
        sx={{ 
          mx: 'auto',
          my: '10px', 
          p: '2px 4px', 
          display: 'flex', 
          alignItems: 'center', 
          width: '80%', 
          borderRadius: '100px' 
        }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <InputBase
          sx={{ ml: 1, flex: 1, color: 'rgba(32, 63, 111, 0.9)' }}
          placeholder="Search Here"
          inputProps={{ 'aria-label': 'search' }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Paper>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button variant='outlined' sx={{
        fontSize: '12px',
        height: '5%',
        width: '10%',
        borderRadius: '10px',
        textAlign: 'right',
        mr:'2%',
        ml: 'auto',
        fontFamily: 'Roboto',
      }}>
        clear
      </Button>
      {isInputActive ? (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box>
          {/* ここで提案をレンダリング */}
          {suggestions.map((suggestion, index) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Typography key={index}>{suggestion}</Typography>
          ))}
        </Box>
      ) : (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AnimatedBox isactive={isInputActive ? 1 : 0}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography sx={{m: '5px' ,fontFamily: 'Roboto'}}>Realtime Update Chart</Typography>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap', gap: '0', justifyContent: 'space-evenly'}}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{ height: '40%', borderRadius: '5px', aspectRatio: '1/1', backgroundColor: 'rgb(85, 198, 244)',}}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Typography sx={{ml: '5px', mt: '5px', fontSize: '16px',fontFamily: 'Roboto', color: 'white'}}>All Users</Typography>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Typography sx={{ml: '5px', mt: '5px', fontSize: '240%',fontFamily: 'Roboto', color: 'white'}}> a DAY</Typography>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{ height: '40%', borderRadius: '5px', aspectRatio: '1/1', backgroundColor: 'rgb(42, 150, 242)',}}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Typography sx={{ml: '5px', mt: '5px', fontSize: '16px',fontFamily: 'Roboto', color: 'white'}}>All Users</Typography>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Typography sx={{my: '5px', mt: '5px', fontSize: '200%',fontFamily: 'Roboto', color: 'white'}}> a WEEK</Typography>
            </Paper>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Paper sx={{ height: '40%', borderRadius: '5px', aspectRatio: '1/1', backgroundColor: 'rgb(0, 105, 240)',}}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Typography sx={{ml: '5px', mt: '5px', fontSize: '16px',fontFamily: 'Roboto', color: 'white'}}>All Users</Typography>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Typography sx={{my: '5px', mt: '5px', fontSize: '180%',fontFamily: 'Roboto', color: 'white'}}> a MONTH</Typography>
            </Paper>
          </Box>
        </AnimatedBox>
      )}
      
    </Box>
  );
}

export default Search;
