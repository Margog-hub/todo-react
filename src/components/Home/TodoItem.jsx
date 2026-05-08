import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const TodoItem = (props) => {
  const todo = props.todo

  const [isEdit, setIsEdit] = useState(false)
  const[title, setTitle] = useState(todo.title || title);
  const [desc, setDesc] = useState(todo.description || desc)

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleChangeDesc = (e) => {
    setDesc(e.target.value)
  }

  const handleDeleteTodo = () => {
    props.handleDeleteTodo(todo._id)
  }

  const handleisDoneTodo = () => {
    props.handleisDoneTodo(todo._id)
  }

  const toggleIsEdit = () => {
    setIsEdit(!isEdit)
    if (isEdit) {
props.handleUpDateTodo (todo._id, title,desc)
    }
  }
  return (
    <div>
      <Card sx={{ minWidth: 275, backgroundColor: todo.isDone ? '#fff010' : undefined }}>
        <CardContent>
          <Stack>
            {
              isEdit ? <TextField size='small' label='Заголовол' value={title} onChange={handleChangeTitle} /> :
                <Typography gutterBottom >
                  {todo.title}
                </Typography>}
            {
              isEdit ? <TextField size='small' label='Опис' value={desc} onChange={handleChangeDesc} /> :
                <Typography variant="body2">
                  {todo.description}
                </Typography>
            }
          </Stack>

        </CardContent>
        <CardActions>
          <Checkbox checked={todo.isDone} onChange={handleisDoneTodo} />
          <Button size="small" onClick={toggleIsEdit}>
            {isEdit ? "Зберегти" : "Редагувати"}</Button>
          <Button size="small" sx={{ backgroundColor: 'red', color: 'white' }} onClick={handleDeleteTodo}>Видалить</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default TodoItem