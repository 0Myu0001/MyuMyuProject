import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreIcon from '@mui/icons-material/Explore';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import { Link } from 'react-router-dom';

//以下サイトの軽量化に使用
const menuButtons = [
  { name: "Home", padding: 9.3 },
  { name: "Explore", padding: 7.3 },
  { name: "Library", padding: 7.8 },
  { name: "Notification", padding: 2 },
  { name: "Other", padding: 9.6 },
  { name: "Setting", padding: 6.5 },
  { name: "Account", padding: 6.5 },
]

const menuStyle = {
  color: '#203f6f',
  fontFamily: 'Roboto',
  textTransform: "none", 
  fontSize: "20px",
  // @ts-expect-error TS(2339): Property 'padding' does not exist on type '{ name:... Remove this comment to see the full error message
  pr: menuButtons.padding ,
}
//ここまで

const MenuList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx = {{
          display: 'flex',
          flexDirection: 'column',
          gridArea: '2 / 1 / 25 / 2',
          width: '260px',
          p: '10px'
        }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography variant='body1' sx={{
            fontSize: '25px',
            fontFamily: 'Roboto',
            p: '20px', 
          }}>
            MyuMyu
          </Typography>
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Box sx={{
          mb: 'auto',
        }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Link to='/home'>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button variant="text" sx={{
              color: '#203f6f',
              fontFamily: 'Roboto',
              textTransform: "none", 
              fontSize: "20px",
              pr: 9.3,
            }}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <HomeRoundedIcon /> <span style={{ marginLeft: "8px" }}>Home</span>
            </Button>
          </Link>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Link to='/explore'>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button variant="text" sx={{
              color: '#203f6f',
              textTransform: "none",
              pr:7.3,
              fontFamily: 'Roboto',
              fontSize: "20px"
            }}> 
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ExploreIcon /> <span style={{ marginLeft: "8px" }}>Explore</span>
            </Button>
          </Link>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Link to='/library'>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button variant="text" sx={{
              color: '#203f6f', 
              textTransform: "none", 
              pr: 7.8, 
              fontFamily: 'Roboto',
              fontSize: "20px"
            }}> 
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <FormatListBulletedRoundedIcon /><span style={{ marginLeft: "8px" }}>Library</span>
            </Button>
          </Link>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Link to='/notification'>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button variant="text" sx={{
              color: '#203f6f',
              textTransform: "none", 
              pr: 2, 
              fontFamily: 'Roboto',
              fontSize: "20px"
            }}> 
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NotificationsNoneRoundedIcon/> <span style={{ marginLeft: "8px" }}>Notification</span>
            </Button>
          </Link>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button variant="text" sx={{
              color: '#203f6f', 
              textTransform: "none", 
              pr: 2, 
              fontFamily: 'Roboto',
              fontSize: "20px"
            }}> 
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <PeopleAltRoundedIcon/><span style={{ marginLeft: "8px" }}>Community</span>
            </Button>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link to='/create'>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Button variant="contained" sx={{
                px: 7.3,
                background: "linear-gradient(45deg, #fff, #00f)",
                fontFamily: 'Roboto',
                fontSize: "15px"
              }}>Create
              </Button>
            </Link>
          </Box>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Box>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button 
              variant="text"
              onClick={handleClick}
              sx={{
                color: '#203f6f', 
                textTransform: "none", 
                pr:6.5, 
                fontFamily: 'Roboto',
                fontSize: "20px"
              }}> 
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <SettingsRoundedIcon/> <span style={{ marginLeft: "8px" }}>Settings</span>
            </Button>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <MenuItem onClick={handleClose}>Analyze</MenuItem>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <MenuItem onClick={handleClose}>Account Setting</MenuItem>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <MenuItem onClick={handleClose}>Privacy Setting</MenuItem>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <MenuItem onClick={handleClose}>Sign Out</MenuItem>
            </Menu>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link to='/account'>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Button variant="text" sx={{
                color: '#203f6f', 
                textTransform: "none", 
                pr:6.5, 
                fontFamily: 'Roboto',
                fontSize: "20px"
              }}> 
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AccountCircleRoundedIcon/> <span style={{ marginLeft: "8px" }}>Account</span>
              </Button>
            </Link>

          </Box>
      </Box>
    );
}

export default MenuList;
