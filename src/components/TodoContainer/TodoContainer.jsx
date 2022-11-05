import React, { useEffect, useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Todo from '../Todo/Todo'
import TodoHeader from '../TodoHeader/TodoHeader'
import styles from './TodoContainer.module.css'

const filters = ['All', 'Active', 'Completed'];

function TodoContainer() {
  const [todoList, setTodoList] = useState(() => readTodoListFromLocalStorage());
  const [filter, setFilter] = useState(filters[0]);

  const handleAddTodo = (todo) => setTodoList([...todoList, todo]);
  const handleUpdateTodo = (updatedTodo) =>
    setTodoList(todoList.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo));
  const handleDeleteTodo = (deletedTodo) =>
    setTodoList(todoList.filter((todo) => todo.id !== deletedTodo.id));
  const filtered = getFilteredItems(todoList, filter);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList])

  return (
    <section className={styles.container}>
      <TodoHeader
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
      />
      <ul className={styles.list}>
        {filtered.length === 0 && <li className={styles.list_nothing}>할 일을 입력해주세요</li>}
        {filtered.map((todo) =>
          <Todo
            todo={todo}
            key={todo.id}
            onUpdateTodo={handleUpdateTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        )}
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

function readTodoListFromLocalStorage() {
  const todoList = localStorage.getItem('todoList');
  return todoList ? JSON.parse(todoList) : [];
}