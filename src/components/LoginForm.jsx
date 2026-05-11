import { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function LoginForm(props) {
  const { handleRegister } = props;
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState('');
  const [pass, setPass] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeLogin = (e) => {
    setData(e.target.value)
  }
  const handleChangePass = (e) => {
    setPass(e.target.value)
  }

  const handleLoginClick = async (event) => {
    if (event) event.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.post('https://todos-be.vercel.app/auth/login', {
        username: data.trim(),
        password: pass.trim(),
      });

      if (response.data.username) {
        props.setUser({ name: response.data.username });
        enqueueSnackbar(`Ласкаво просимо, ${response.data.username}`, {
          variant: 'success',
        });
      }
    } catch (e) {

      const errorMsg = e.response?.data?.message || 'Помилка авторизації';
      enqueueSnackbar(errorMsg, { variant: 'error' });
      console.error("Login error:", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (

    <Stack
      component="form"
      onSubmit={handleLoginClick}
      sx={{ width: '400px' }}
      gap={2}
    >
      <Typography variant="h3" gutterBottom>
        Вхід в сервіс
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Немає облікового запису?
        <Button variant="text" onClick={handleRegister} sx={{ ml: 1 }}>
          Зареєструватись
        </Button>
      </Typography>

      <TextField
        id="login"
        label="Логін"
        variant="standard"
        autoComplete="username"
        onChange={handleChangeLogin}
        value={data}
      />

      <TextField
        id="password"
        label="Пароль"
        variant="standard"
        type="password"
        autoComplete="current-password"
        onChange={handleChangePass}
        value={pass}
      />

      <Button
        type="submit"
        disabled={isLoading || !data || !pass}
        variant="contained"
      >
        {isLoading ? 'Вхід...' : 'Увійти'}
      </Button>
    </Stack>
  );
}

export default LoginForm;

