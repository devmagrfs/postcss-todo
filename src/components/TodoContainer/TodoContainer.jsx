import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Todo from '../Todo/Todo'
import TodoNav from '../TodoNav/TodoNav'
import styles from './TodoContainer.module.css'

const filters = ['All', 'Active', 'Completed'];

function TodoContainer() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState(filters[0]);

  const handleAddTodo = (todo) => setTodoList([...todoList, todo]);
  const handleUpdateTodo = (updatedTodo) =>
    setTodoList(todoList.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo));
  const handleDeleteTodo = (deletedTodo) =>
    setTodoList(todoList.filter((todo) => todo.id !== deletedTodo.id));
  const filtered = getFilteredItems(todoList, filter);

  return (
    <section className={styles.container}>
      <TodoNav
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
      />
      <ul>
        {todoList.length > 0 ? filtered.map((todo) =>
          <Todo
            todo={todo}
            key={todo.id}
            onUpdateTodo={handleUpdateTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        )
          :
          <div>할 일을 추가해주세요</div>
        }
      </ul>
      <AddTodo handleAddTodo={handleAddTodo} />
    </section>
  )
}

export default TodoContainer

function getFilteredItems(todoList, filter) {
  if (filter === 'All') {
    return todoList;
  }
  return todoList.filter((todo) => todo.isCompleted === (filter === 'Active' ? false : true));
}