import { useState } from 'react'
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { NavLink } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { setUser } from '../lib/userSlice';


function RegisterForm(props) {
  const handleLogin = props.handleLogin
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState('')
  const [pass, setPass] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();


  const handleChangeLogin = (e) => {
    setData(e.target.value)
  }

  const handleChangePass = (e) => {
    setPass(e.target.value)
  }


  const handleRegisterClick = async (event) => {
    if (event) event.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.post('https://todos-be.vercel.app/auth/register', {
        username: data.trim(),
        password: pass.trim(),
      });
      if (response.data.username) {
        const setUserAction = setUser(response.data)
        dispatch(setUserAction)
        enqueueSnackbar(`Ласкаво просимо, ${response.data.username}`, {
          variant: 'success',
        });
      }
    } catch (e) {
      const errorMsg = e.response?.data?.message || 'Помилка авторизації';
      enqueueSnackbar(errorMsg, { variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack
      component="form"
      onSubmit={handleRegisterClick}
      sx={{ width: '400px' }}
      gap={2}
    >
      <Typography variant="h3" gutterBottom>
        Реєстрація
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Є обліковий запис?
        <NavLink to='/login'> Війти</NavLink>
      </Typography>

      <TextField
        id="login"
        label="Логін"
        variant="standard"
        onChange={handleChangeLogin}
        value={data} />
      <TextField
        id="password"
        label="Пароль"
        variant="standard"
        type="password"
        onChange={handleChangePass}
        value={pass} />
      <Button
        type="submit"
        disabled={isLoading || !data || !pass}
        variant="contained"
      >
        Зареєструватись
      </Button>
    </Stack>
  )
}

export default RegisterForm
