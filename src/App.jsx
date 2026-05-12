import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Stack from '@mui/material/Stack';
import SingUpForm from './components/SingUpForm';
import HomePage from './components/Home/HomePage';

function App() {
  const [user, setUser] = useState()
  return (
    <Stack sx={{ alignItems: 'center' }}>
      { user ?
        <HomePage user = {user}/> :
        <SingUpForm  setUser ={setUser} />
      }
    </Stack>
  )
}

export default App
