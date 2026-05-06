import {useState} from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function RegisterForm(props) {
const handleLogin = props.handleLogin
const [data, setData] = useState('')
const [pass, setPass] = useState('')

const handleChangeLogin =(e)=> {
 setData(e.target.value)
}

const handleChangePass =(e)=> {
 setPass(e.target.value)
}

  return (
     <Stack sx={{ width: '400px' }} gap={2}>
    <Typography variant="h3" gutterBottom>
        Реєстрація
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
       Є обліковий запис?
      </Typography>
      <Button variant="text" onClick={handleLogin}>Війти</Button>
    <TextField id="login" label="Логін" variant="standard" onChange={handleChangeLogin} value ={data}/>
    <TextField id="password" label="Пароль" variant="standard" type="password"
    onChange={handleChangePass} value={pass}/>
    <Button variant="contained"> Зареєструватись</Button>
     </Stack>
  )
}

export default RegisterForm
