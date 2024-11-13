import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

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

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length > 0) {
      setSuggestions(['suggestion1', 'suggestion2', 'suggestion3']);
    } else {
      setSuggestions([]);
    }
  }
  return(
    <Box sx = {{ gridArea: ' 2 / 5 / 13 / 7', display: 'flex', flexDirection: 'column',}}>
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
        <InputBase
          sx={{ ml: 1, flex: 1, color: 'rgba(32, 63, 111, 0.9)' }}
          placeholder="Search Here"
          inputProps={{ 'aria-label': 'search' }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Paper>
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
        <Box>
          {/* ここで提案をレンダリング */}
          {suggestions.map((suggestion, index) => (
            <Typography key={index}>{suggestion}</Typography>
          ))}
        </Box>
      ) : (
        <AnimatedBox isactive={isInputActive ? 1 : 0}>
          <Typography sx={{m: '5px' ,fontFamily: 'Roboto'}}>Realtime Update Chart</Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap', gap: '0', justifyContent: 'space-evenly'}}>
            <Paper sx={{ height: '40%', borderRadius: '5px', aspectRatio: '1/1', backgroundColor: 'rgb(85, 198, 244)',}}>
              <Typography sx={{ml: '5px', mt: '5px', fontSize: '16px',fontFamily: 'Roboto', color: 'white'}}>All Users</Typography>
              <Typography sx={{ml: '5px', mt: '5px', fontSize: '240%',fontFamily: 'Roboto', color: 'white'}}> a DAY</Typography>
            </Paper>
            <Paper sx={{ height: '40%', borderRadius: '5px', aspectRatio: '1/1', backgroundColor: 'rgb(42, 150, 242)',}}>
              <Typography sx={{ml: '5px', mt: '5px', fontSize: '16px',fontFamily: 'Roboto', color: 'white'}}>All Users</Typography>
              <Typography sx={{my: '5px', mt: '5px', fontSize: '200%',fontFamily: 'Roboto', color: 'white'}}> a WEEK</Typography>
            </Paper>
            <Paper sx={{ height: '40%', borderRadius: '5px', aspectRatio: '1/1', backgroundColor: 'rgb(0, 105, 240)',}}>
              <Typography sx={{ml: '5px', mt: '5px', fontSize: '16px',fontFamily: 'Roboto', color: 'white'}}>All Users</Typography>
              <Typography sx={{my: '5px', mt: '5px', fontSize: '180%',fontFamily: 'Roboto', color: 'white'}}> a MONTH</Typography>
            </Paper>
          </Box>
        </AnimatedBox>
      )}
      
    </Box>
  );
}

export default Search;
