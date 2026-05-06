import {useState} from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Stack from '@mui/material/Stack';
import SingUpForm from './components/SingUpForm';

function App() {
  return (
  <Stack sx={{ alignItems: 'center' }}>
  <SingUpForm />
  </Stack>
  )
}

export default App
