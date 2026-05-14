import NotInterestedIcon from '@mui/icons-material/NotInterested';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';

const ErrorElement = () => {
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center", marginTop: "150px" }}>
      <NotInterestedIcon color='error' sx={{ width: '150px', height: '150px' }} />
      <Typography variant='h3'>Сталася помилка</Typography>
      <Typography >Працюємо над її усуненням</Typography>
      <NavLink to='/login'>Повернутися на головну</NavLink>
    </Stack>
  )
}

export default ErrorElement