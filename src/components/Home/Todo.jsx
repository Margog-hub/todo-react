import React from 'react'
import { store } from '../../lib/store'
import axios from 'axios';
import { NavLink, useLoaderData } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TornadoIcon from '@mui/icons-material/Tornado';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export async function todoLoader({ params }) {
  const id = params.id
  const user = store.getState().userSlice.user
  console.log(params)

  if (!user?.access_token) { return null; }
  try {
    const response = await axios.get(`https://todos-be.vercel.app/todos/${id}`, {
      headers: {
        "Authorization": `Bearer ${user?.access_token}`
      }
    })
    return response.data
  }
  catch (e) {
    console.error("Ошибка при загрузке todo:", e);
    return null;
  }
}

const Todo = () => {
  const todo = useLoaderData()
  if (!todo) {
    return <Typography>Загрузка не удалась или вы не авторизованы</Typography>;
  }

  return (
    <Stack>
      <TornadoIcon />
      <NavLink to={-1}>
        <ArrowBackIosIcon />
        Назад
      </NavLink>
      <Typography variant='h3'>{todo?.title}</Typography>
      <Typography variant='h4'>{todo?.description}</Typography>
    </Stack>
  )
}

export default Todo