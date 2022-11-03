import React, { useState } from 'react'
import styles from './TodoNav.module.css';
import { BsSunFill, BsSun } from 'react-icons/bs';

function TodoNav({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.nav}>
      <BsSun value={{ style: { color: 'white' } }} />
      <div className={styles.filterWrapper}>
        {filters.map((value, index) =>
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>
              {value}
            </button>
          </li>
        )}
      </div>
    </header>
  )
}

export default TodoNav