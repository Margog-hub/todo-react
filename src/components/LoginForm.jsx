import {useState} from 'react'
import { useSnackbar } from 'notistack'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function LoginForm(props) {
const handleRegister = props.handleRegister
const { enqueueSnackbar } = useSnackbar()

const [data, setData] = useState('')
const [pass, setPass] = useState('')

const handleChangeLogin =(e)=> {
 setData(e.target.value)
}

const handleChangePass =(e)=> {
 setPass(e.target.value)
}

const handleLoginClick =()=> {
  // setUser(id)
  if( data === 'admin' && pass === "123") {
    props.setUser({name: data})
    enqueueSnackbar("Ласкаво просимо, " + data, {
      variant : 'success'
    })
  } else {
    enqueueSnackbar('Неправильні дані або помилка сервера', {
      variant: 'error'
    })
  }
}
  return (
    <Stack sx={{ width: '400px' }} gap={2}>
    <Typography variant="h3" gutterBottom>
        Вхід в сервіс 
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
       Немає облікового запису?
      </Typography>
      <Button variant="text" onClick={handleRegister}>Зареєструватись</Button>
    <TextField id="login" label="Логін" variant="standard" onChange={handleChangeLogin} value ={data}/>
    <TextField id="password" label="Пароль" variant="standard" type="password"
    onChange={handleChangePass} value={pass}/>
    <Button variant="contained" onClick={handleLoginClick}> Війти</Button>
     </Stack> 
  )
}

export default LoginForm
