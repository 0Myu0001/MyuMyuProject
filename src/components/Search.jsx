import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';

const Search = () => {
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

        </Box>
    );
}

export default Search;
