import React from 'react'
import styles from './TodoList.module.css';

function TodoList({ todoList }) {
  return (
    <ul className={styles.ul}>
      {todoList.map((todo) => {
        return (
          <label className={styles.label} key={todo.id}>
            <input type='checkbox' checked={todo.isComplete} />
            <span>{todo.name}</span>
          </label>
        )
      })}
    </ul>
  )
}

export default TodoList