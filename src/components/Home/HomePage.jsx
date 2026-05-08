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



  const handleDeleteTodo =(_id) => {
   setTodos( todos.filter((todo) => { return todo._id !== _id}))
  }


  const handleisDoneTodo =(_id) => {
   setTodos( todos.map((todo) => { return todo._id === _id ?
    {...todo, isDone: !todo.isDone} : todo
   }))
  }
  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        {props.username}
      </Typography>
      <AddTodo addTodo={handleAddTodo} />

      {
        todos.map((todo) => (
          <TodoItem key={todo._id} 
          todo={todo} 
          handleDeleteTodo={handleDeleteTodo}
          handleisDoneTodo = {handleisDoneTodo}/>
        ))
      }

    </div>
  )
}

export default HomePage
