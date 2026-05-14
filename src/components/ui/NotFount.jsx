import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';

const NotFount = () => {
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
      <CloseIcon color='secondary' sx={{ width: '150px', height: '150px' }} />
      <Typography variant='h3'>Сторiнка на знайдена</Typography>
      <NavLink to='/login'>Повернутися на головну</NavLink>
    </Stack>
  )
}

export default NotFount