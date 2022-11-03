import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import styles from './Todo.module.css';

function Todo({ todo, onUpdateTodo, onDeleteTodo }) {
  const { name, isCompleted } = todo;

  const handleChange = (event) => {
    const isCompleted = event.target.checked ? true : false;
    onUpdateTodo({ ...todo, isCompleted });
  };

  const handleDelete = () => onDeleteTodo(todo);

  return (
    <li>
      <label className={styles.label}>
        <input
          type='checkbox'
          checked={isCompleted === true}
          onChange={handleChange}
        />
        {name}
      </label>
      <button onClick={handleDelete}>
        <BsFillTrashFill />
      </button>
    </li>
  )
}

export default Todo