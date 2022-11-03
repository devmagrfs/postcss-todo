import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
import TodoNav from '../TodoNav/TodoNav'
import styles from './TodoContainer.module.css'

function TodoContainer() {
  const [todoList, setTodoList] = useState([{
    id: '1',
    name: 'test1',
    isCompleted: false,
  }, {
    id: '2',
    name: 'test2',
    isCompleted: false,
  }]);

  const handleAddTodo = (todo) => {
    console.log(todo);
    setTodoList([...todoList, todo]);
  };

  return (
    <section className={styles.container}>
      <TodoNav />
      <TodoList todoList={todoList} />
      <AddTodo handleAddTodo={handleAddTodo} />
    </section>
  )
}

export default TodoContainer