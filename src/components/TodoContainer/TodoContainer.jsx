import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Todo from '../Todo/Todo'
import TodoNav from '../TodoNav/TodoNav'
import styles from './TodoContainer.module.css'

function TodoContainer() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (todo) => setTodoList([...todoList, todo]);
  const handleUpdateTodo = (updatedTodo) =>
    setTodoList(todoList.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo));

  const handleDeleteTodo = (deletedTodo) =>
    setTodoList(todoList.filter((todo) => todo.id !== deletedTodo.id));

  return (
    <section className={styles.container}>
      <TodoNav />
      <ul>
        {todoList.length > 0 ? todoList.map((todo) =>
          <Todo
            todo={todo}
            key={todo.id}
            onUpdateTodo={handleUpdateTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        )
          :
          <div>입력해주세요</div>
        }
      </ul>
      <AddTodo handleAddTodo={handleAddTodo} />
    </section>
  )
}

export default TodoContainer