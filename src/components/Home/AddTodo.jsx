import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const AddTodo = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleChangeDesc = (e) => {
    setDescription(e.target.value)
  }

  const handleAddTodo = () => {
    props.addTodo(title, description)
    reset()
  }

  const reset = () => {
    setTitle('');
    setDescription('');
  }


  return (
    <Accordion disabled={props.isLoading}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Додавання нового завдання
      </AccordionSummary>
      <AccordionDetails>
        <Stack>
          <TextField size='small' label='Заголовол' value={title} onChange={handleChangeTitle} />
          <TextField size='small' label='Опис' value={description} onChange={handleChangeDesc} />
        </Stack>
      </AccordionDetails>
      <AccordionActions>
        <Button onClick={reset}>Скинути</Button>
        <Button onClick={handleAddTodo}>Додати</Button>
      </AccordionActions>
    </Accordion>
  )
}

export default AddTodo