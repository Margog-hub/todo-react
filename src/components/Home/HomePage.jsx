import { useState } from 'react';
import { useSnackbar } from 'notistack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import axios from 'axios';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { selectUser } from '../../lib/userSlice';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const user = useSelector(selectUser)

  const getTodos = async () => {
    if (!user?.access_token) return;
    try {
      setIsLoading(true)
      const response = await axios.get('https://todos-be.vercel.app/todos', {
        headers: {
          "Authorization": `Bearer ${user?.access_token}`
        }
      })
      setTodos(response.data)
    }
    catch (e) {
      const errorMsg = e.response?.data?.message || 'Помилка авторизації';
      enqueueSnackbar(errorMsg, { variant: 'error' });
    }
    finally {
      setIsLoading(false)
    }
  }

  const handleAddTodo = async (title, description) => {
    if (!user?.access_token) return;
    try {
      setIsLoading(true)
      const response = await axios.post('https://todos-be.vercel.app/todos' + id, {
        "title": title,
        "description": description
      }, {
        headers: {
          "Authorization": `Bearer ${user?.access_token}`
        }
      })
      await getTodos()
    }
    catch (e) {
      const errorMsg = e.response?.data?.message || 'Помилка авторизації';
      enqueueSnackbar(errorMsg, { variant: 'error' });
    }
    finally {
      setIsLoading(false)
    }
  }

  const handleDeleteTodo = async (_id) => {
    if (!user?.access_token) return;
    try {
      setIsLoading(true)
      const response = await axios.delete('https://todos-be.vercel.app/todos/' + _id, {
        headers: {
          "Authorization": `Bearer ${user?.access_token}`
        }
      })
      await getTodos()
    }
    catch (e) {
      const errorMsg = e.response?.data?.message || 'Помилка авторизації';
      enqueueSnackbar(errorMsg, { variant: 'error' });
    }
    finally {
      setIsLoading(false)
    }
  }

  const handleisDoneTodo = async (_id) => {
    if (!user?.access_token) return;
    try {
      setIsLoading(true)
      const response = await axios.patch('https://todos-be.vercel.app/todos/' + _id, {
        completed: !todos.find(item => item._id === _id).completed
      }, {
        headers: {
          "Authorization": `Bearer ${user?.access_token}`
        }
      })
      await getTodos()
    }
    catch (e) {
      const errorMsg = e.response?.data?.message || 'Помилка авторизації';
      enqueueSnackbar(errorMsg, { variant: 'error' });
    }
    finally {
      setIsLoading(false)
    }
  }

  const handleUpDateTodo = async (_id, title, description) => {
    if (!user?.access_token) return;
    try {
      setIsLoading(true)
      const response = await axios.patch('https://todos-be.vercel.app/todos/' + _id, {
        title,
        description
      }, {
        headers: {
          "Authorization": `Bearer ${user?.access_token}`
        }
      })
      await getTodos()
    }
    catch (e) {
      const errorMsg = e.response?.data?.message || 'Помилка авторизації';
      enqueueSnackbar(errorMsg, { variant: 'error' });
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (user?.access_token) {
      getTodos();
    }
  }, [user?.access_token]);

  if (!user) {
    return <Navigate to='/login' />
  }

  if (isLoading && todos.length === 0) {
    return <CircularProgress />
  }


  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        {user?.username}
      </Typography>

      <AddTodo addTodo={handleAddTodo} isLoading={isLoading} />

      {
        todos.map((todo) => (
          <TodoItem key={todo._id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleisDoneTodo={handleisDoneTodo}
            handleUpDateTodo={handleUpDateTodo}
            isLoading={isLoading}
          />
        ))
      }
    </div>
  )
}

export default HomePage
