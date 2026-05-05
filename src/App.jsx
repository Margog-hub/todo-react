import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
function App() {
 

  return (
    
    <Stack sx={{ alignItems: 'center' }}>
      <Stack sx={{ width: '400px' }} gap={2}>

    <Typography variant="h3" gutterBottom>
        Вхід в сервіс
      </Typography>
    <TextField id="login" label="Логін" variant="standard" />
    <TextField id="password" label="Пароль" variant="standard" type="password"/>
    <Button variant="contained">Війти</Button>
     </Stack>
    </Stack>
  
  )
}

export default App
