import {useState} from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function App() {
 
const [data, setData] = useState('')
const [pass, setPass] = useState('')

const handleLogin =() => {
  setData(Date.now())
}

const handleChangeLogin =(e)=> {
 setData(e.target.value)
}

const handleChangePass =(e)=> {
 setPass(e.target.value)
}
  return (
    
    <Stack sx={{ alignItems: 'center' }}>
      <Stack sx={{ width: '400px' }} gap={2}>

    <Typography variant="h3" gutterBottom>
        Вхід в сервіс {data}
      </Typography>
    <TextField id="login" label="Логін" variant="standard" onChange={handleChangeLogin} value ={data}/>
    <TextField id="password" label="Пароль" variant="standard" type="password"
    onChange={handleChangePass} value={pass}/>
    <Button variant="contained"onChange={handleLogin} >Війти</Button>
     </Stack>
    </Stack>
  
  )
}

export default App
