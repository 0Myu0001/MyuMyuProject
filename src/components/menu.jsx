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
  color: '#3f3f3f',
  fontFamily: 'Roboto',
  textTransform: "none", 
  fontSize: "20px",
  pr: menuButtons.padding ,
}
//ここまで

const MenuList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return(
        <Box sx = {{
          display: 'flex',
          flexDirection: 'column',
          gridArea: '2 / 1 / 25 / 2',
          width: '260px',
          p: '10px'
        }}>
        <Box>
          <Typography variant='body1' sx={{
            fontSize: '25px',
            fontFamily: 'Roboto',
            p: '20px'
          }}>
            MyuMyu
          </Typography>
        </Box>
        <Box sx={{
          mb: 'auto',
        }}>
          <Link to='/home'>
            <Button variant="text" sx={{
              color: '#3f3f3f',
              fontFamily: 'Roboto',
              textTransform: "none", 
              fontSize: "20px",
              pr: 9.3,
            }}>
              <HomeRoundedIcon /> <span style={{ marginLeft: "8px" }}>Home</span>
            </Button>
          </Link>
          <Link to='/explore'>
            <Button variant="text" sx={{
              color: '#3f3f3f',
              textTransform: "none",
              pr:7.3,
              fontFamily: 'Roboto',
              fontSize: "20px"
            }}> 
              <ExploreIcon /> <span style={{ marginLeft: "8px" }}>Explore</span>
            </Button>
          </Link>
          <Link to='/library'>
            <Button variant="text" sx={{
              color: '#3f3f3f', 
              textTransform: "none", 
              pr: 7.8, 
              fontFamily: 'Roboto',
              fontSize: "20px"
            }}> 
              <FormatListBulletedRoundedIcon /><span style={{ marginLeft: "8px" }}>Library</span>
            </Button>
          </Link>
          <Link to='/notification'>
            <Button variant="text" sx={{
              color: '#3f3f3f',
              textTransform: "none", 
              pr: 2, 
              fontFamily: 'Roboto',
              fontSize: "20px"
            }}> 
              <NotificationsNoneRoundedIcon/> <span style={{ marginLeft: "8px" }}>Notification</span>
            </Button>
          </Link>
            <Button variant="text" sx={{
              color: '#3f3f3f', 
              textTransform: "none", 
              pr: 2, 
              fontFamily: 'Roboto',
              fontSize: "20px"
            }}> 
              <PeopleAltRoundedIcon/><span style={{ marginLeft: "8px" }}>Community</span>
            </Button>
            <Button variant="contained" sx={{
              px: 7.3,
              background: "linear-gradient(45deg, #fff, #00f)",
              fontFamily: 'Roboto',
              fontSize: "15px"
            }}>Create
            </Button>
          </Box>
          <Box>
            <Button 
              variant="text"
              onClick={handleClick}
              sx={{
                color: '#3f3f3f', 
                textTransform: "none", 
                pr:6.5, 
                fontFamily: 'Roboto',
                fontSize: "20px"
              }}> 
                <SettingsRoundedIcon/> <span style={{ marginLeft: "8px" }}>Settings</span>
            </Button>
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
              <MenuItem onClick={handleClose}>Analyze</MenuItem>
              <MenuItem onClick={handleClose}>Account Setting</MenuItem>
              <MenuItem onClick={handleClose}>Privacy Setting</MenuItem>
              <MenuItem onClick={handleClose}>Sign Out</MenuItem>
            </Menu>
            <Link to='/account'>
              <Button variant="text" sx={{
                color: '#3f3f3f', 
                textTransform: "none", 
                pr:6.5, 
                fontFamily: 'Roboto',
                fontSize: "20px"
              }}> 
                <AccountCircleRoundedIcon/> <span style={{ marginLeft: "8px" }}>Account</span>
              </Button>
            </Link>

          </Box>
      </Box>
    );
}

export default MenuList;
