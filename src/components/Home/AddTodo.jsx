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
const [desc, setDesc] = useState('')

const handleChangeTitle =(e)=> {
setTitle(e.target.value)
}
const handleChangeDesc =(e)=> {
setDesc(e.target.value)
}

const handleAddTodo =() => {
  props.addTodo(title, desc)
  reset()
}

const reset =() => {
 setTitle('');
 setDesc('');
}
  return (
    <div>
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Додавання нового завдання
        </AccordionSummary>
        <AccordionDetails>
          <Stack>
            <TextField size='small' label='Заголовол' value={title} onChange={handleChangeTitle }/>
            <TextField size='small' label='Опис' value={desc} onChange={handleChangeDesc} />
          </Stack>
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={reset}>Скинути</Button>
          <Button onClick={handleAddTodo}>Додати</Button>
        </AccordionActions>
      </Accordion>
    </div>
  )
}

export default AddTodo