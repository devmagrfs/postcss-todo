import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import styles from './Todo.module.css';

function Todo({ todo, onUpdateTodo, onDeleteTodo }) {
  const { id, name, isCompleted } = todo;

  const handleChange = (event) => {
    const isCompleted = event.target.checked ? true : false;
    onUpdateTodo({ ...todo, isCompleted });
  };

  const handleDelete = () => onDeleteTodo(todo);

  return (
    <li className={styles.todo}>
      <input
        type='checkbox'
        checked={isCompleted === true}
        onChange={handleChange}
        className={styles.checkbox}
        id={id}
      />
      <label htmlFor={id} className={styles.text}>
        {name}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <BsFillTrashFill />
        </button>
      </span>
    </li>
  )
}

export default Todo