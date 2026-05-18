import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setUser } from '../../lib/userSlice'
import { NavLink } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Profile = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const logoutHandler = () => {
    localStorage.removeItem('token')
    dispatch(setUser(null))
  }
  return (
    <Stack sx={{ alignItems: "center" }} >
      <NavLink to={-1}>
        <ArrowBackIcon />
      </NavLink>
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "medium" }}>
        {user.username}
      </Typography>
      <Button onClick={logoutHandler} >Logout</Button>
    </Stack>
  )
}

export default Profile