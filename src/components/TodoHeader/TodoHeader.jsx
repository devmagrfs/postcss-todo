import React from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './TodoHeader.module.css';

function TodoHeader({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <BsFillMoonFill />}
        {darkMode && <BsFillSunFill />}
      </button>
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