import React from 'react'
import styles from './TodoHeader.module.css';

function TodoHeader({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
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

export default TodoHeader