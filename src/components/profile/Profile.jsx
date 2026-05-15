import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../lib/userSlice'
import { NavLink } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Stack from '@mui/material/Stack';

const Profile = () => {
  const user = useSelector(selectUser)
  return (
    <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
      <NavLink to={-1}>
        <ArrowBackIcon />
      </NavLink>
      {user.username}
    </Stack>
  )
}

export default Profile