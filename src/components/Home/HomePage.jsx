import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const HomePage = (props) => {
  const todo ={
    _id: 'kjhgf2y',
    title: 'Поїсти' ,
    description: 'Приготувати',
    isDone: true
    
  }
  return (
    <div>
       <Typography variant="subtitle1" gutterBottom>
            {props.username}
            </Typography>

             <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom >
         {todo.title}
        </Typography>
        <Typography variant="body2">
         {todo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox  checked ={todo.isDone}/>
        <Button size="small">Редагувати</Button>
        <Button size="small" sx={{backgroundColor: 'red', color: 'white'}}>Видалить</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default HomePage
