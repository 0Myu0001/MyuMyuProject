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
                    sx={{ ml: 1, flex: 1 }}
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
            <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap', gap: '0',}}>
                <Paper sx={{height: '36%', borderRadius: '10px', aspectRatio: '4/3', m: '5px',}}>
                    <Typography >Suggest 1</Typography>
                </Paper>
                <Paper sx={{height: '36%', borderRadius: '10px', aspectRatio: '4/3', m: '5px',}}>
                    <Typography >Suggest 2</Typography>
                </Paper>
                <Paper sx={{height: '36%', borderRadius: '10px', aspectRatio: '4/3', m: '5px',}}>
                    <Typography >Suggest 3</Typography>
                </Paper>
                <Paper sx={{height: '36%', borderRadius: '10px', aspectRatio: '4/3', m: '5px',}}>
                    <Typography >Suggest 4</Typography>
                </Paper>
                <Paper sx={{height: '36%', borderRadius: '10px', aspectRatio: '4/3', m: '5px',}}>
                    <Typography >Suggest 5</Typography>
                </Paper>
                <Paper sx={{height: '36%', borderRadius: '10px', aspectRatio: '4/3', m: '5px',}}>
                    <Typography >Suggest 6</Typography>
                </Paper>
            </Box>

        </Box>
    );
}

export default Search;
