import React from 'react'
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  <NavLink style={{ color: '#fff' }} to='/login'> Login</NavLink>,
  <NavLink style={{ color: '#fff' }} to='/register'>Register </NavLink>,
  <NavLink style={{ color: '#fff' }} to='/about'> About</NavLink>
];

const Layout = () => {
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