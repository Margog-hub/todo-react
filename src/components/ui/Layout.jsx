import React from 'react'
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUser } from '../../lib/userSlice';
import PersonIcon from '@mui/icons-material/Person';
import {jwtDecode } from 'jwt-decode';
import { isFuture } from 'date-fns';

const unLoggedItems = [
  <NavLink style={{ color: '#fff' }} to='/login'> Login</NavLink>,
  <NavLink style={{ color: '#fff' }} to='/register'>Register </NavLink>,
  <NavLink style={{ color: '#fff' }} to='/about'> About</NavLink>
];

const loggedItems = [
  <NavLink style={{ color: '#fff' }} to='/about'> About</NavLink>,
  <NavLink style={{ color: '#fff' }} to='/profile'><PersonIcon /> </NavLink>
];

const Layout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const tokenFromStorage = localStorage.getItem('token');
  const navItems = user ? loggedItems : unLoggedItems;

  if(!user && tokenFromStorage){
    const {exp, username} = jwtDecode(tokenFromStorage)
    if(isFuture(exp*1000)) {
      dispatch(setUser({username, access_token: tokenFromStorage}))
      return null
    } else {
      localStorage.removeItem('token')
    }
    return null
  }

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            TodoLost
          </Typography>
          <Box >
            {navItems.map((item, index) => (
              <Button key={index} size='small'>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Stack sx={{ marginTop: '80px', alignItems: "center", }}>
        <Outlet />
      </Stack>
    </>

  )
}

export default Layout