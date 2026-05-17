import React from 'react'
import { store } from '../../lib/store'
import axios from 'axios';
import { NavLink, useLoaderData } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TornadoIcon from '@mui/icons-material/Tornado';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export async function todoLoader({ params }) {
  const id = params.id;
  const user = store.getState().userSlice.user;
  console.log(params);

  if (!user?.access_token) { return null; }
  try {
    const response = await axios.get(`https://todos-be.vercel.app/todos/${id}`, {
      headers: {
        "Authorization": `Bearer ${user?.access_token}`
      }
    });
    return response.data;
  }
  catch (e) {
    console.error("Ошибка при загрузке todo:", e);
    return null;
  }
}

const Todo = () => {
  const todo = useLoaderData();
  if (!todo) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Typography color="error" variant="h6">
          Загрузка не удалась или вы не авторизованы
        </Typography>
      </Box>
    );
  }

  return (
    
    <Stack  spacing={3}  sx={{ maxWidth: 600, margin: "40px auto",  padding: "24px", }}>
      <Box sx={{ display: "flex", justifyContent: "center", color: "primary.main" }}>
        <TornadoIcon sx={{ fontSize: 140 }} />
      </Box>
      <NavLink to={-1} style={{ 
    display: "inline-flex", 
    alignItems: "center", 
    gap: "10px", 
    }}>
        <ArrowBackIosIcon sx={{ fontSize: 70 }}/>
        Назад
      </NavLink>

     
      <Box>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ fontWeight: 700, color: "text.primary" }}
        >
          {todo?.title}
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ color: "text.secondary", lineHeight: 1.6 }}
        >
          {todo?.description || "Описание отсутствует"}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Todo;