import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const todo = {
  _id: 'kjhgf2y',
  title: 'Поїсти',
  description: 'Приготувати',
  isDone: true
}


const HomePage = (props) => {
  const [todos, setTodos] = useState([todo])

  
const handleAddTodo = (title, desc) => {
  const newTodo = {
    _id: Date.now().toString(),
    title: title,
    description: desc,
    isDone: false
  }
  setTodos([newTodo, ...todos])
}
  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        {props.username}
      </Typography>
      <AddTodo addTodo={handleAddTodo}/>
        {/* <Button size="small" onClick={handleAddTodo}>Додати</Button> */}
        {
        todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))
      }

    </div>
  )
}

export default HomePage
