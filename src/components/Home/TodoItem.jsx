import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const TodoItem = (props) => {
  const todo = props.todo
  const handleDeleteTodo = () => {props.handleDeleteTodo(todo._id)}
  const handleisDoneTodo = () => {props.handleisDoneTodo(todo._id)}
  return (
    <div>
           <Card sx={{ minWidth: 275, backgroundColor: todo.isDone ? '#fff010' : undefined }}>
      <CardContent>
        <Typography gutterBottom >
         {todo.title}
        </Typography>
        <Typography variant="body2">
         {todo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox  checked ={todo.isDone} onChange={handleisDoneTodo}/>
        <Button size="small">Редагувати</Button>
        <Button size="small" sx={{backgroundColor: 'red', color: 'white'}}onClick={handleDeleteTodo}>Видалить</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default TodoItem