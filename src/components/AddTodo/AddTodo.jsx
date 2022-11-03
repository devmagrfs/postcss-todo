import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

function AddTodo({ setTodoList, handleAddTodo }) {
  const [todo, setTodo] = useState('');

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.trim().length === 0) return;
    handleAddTodo({ id: uuidv4(), name: todo, isCompleted: false });
    setTodo('');
  };

  return (
    <form>
      <input
        type='text'
        name='name'
        placeholder='할 일을 입력해 주세요.'
        value={todo}
        onChange={handleInputChange}
      />
      <button type='submit' onClick={handleSubmit}>추가</button>
    </form>
  )
}

export default AddTodo