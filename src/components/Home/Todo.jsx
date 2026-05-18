import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TornadoIcon from '@mui/icons-material/Tornado';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSnackbar } from 'notistack';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { selectUser } from '../../lib/userSlice';


const Todo = () => {
  const [isLoading, setIsLoading] = useState(false) ;
  const [todo, setTodo] = useState();
  const user = useSelector(selectUser);
  const { id } = useParams(); 
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if(id) {
      setIsLoading(true)
       axios.get(`https://todos-be.vercel.app/todos/${id}`, {
      headers: {
        "Authorization": `Bearer ${user?.access_token}`
      }
    })
    .then(response => {
      setTodo(response.data)
    })
    .catch((e) => {
      const errorMsg = e.response?.data?.message || 'Помилка авторизації';
      enqueueSnackbar(errorMsg, { variant: 'error' });
    })
    .finally(() => {
      setIsLoading(false)
    })
    }
  }, [id])

  if (!id) {
    return(
    <div>
      <Typography variant='h3'> Такий ID не знайдено </Typography>
      <NavLink to={'/'}>Додому</NavLink>
    </div>
    )
  }
  
  if(isLoading) {
    return <CircularProgress />
  }


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

    <Stack spacing={3} sx={{ maxWidth: 600, margin: "40px auto", padding: "24px", }}>
      <Box sx={{ display: "flex", justifyContent: "center", color: "primary.main" }}>
        <TornadoIcon sx={{ fontSize: 140 }} />
      </Box>
      <NavLink to={-1} style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
      }}>
        <ArrowBackIosIcon sx={{ fontSize: 70 }} />
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