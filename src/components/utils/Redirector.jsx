import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../lib/userSlice'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom';


const Redirector = () => {
  const user = useSelector(selectUser)

  if (!user) {
    return <Navigate to='/login' />
  }

  return (<Outlet />)
}

export default Redirector