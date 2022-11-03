import React from 'react'
import styles from './TodoHeader.module.css';
import { BsSunFill, BsSun } from 'react-icons/bs';

function TodoNav({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
      <BsSun value={{ style: { color: 'white' } }} />
      <ul className={styles.filters}>
        {filters.map((value, index) =>
          <li key={index}>
            <button
              onClick={() => onFilterChange(value)}
              className={`${styles.filter} ${filter === value && styles.selected}`}
            >
              {value}
            </button>
          </li>
        )}
      </ul>
    </header>
  )
}

export default TodoNav