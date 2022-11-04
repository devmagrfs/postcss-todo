import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <TodoContainer />
    </DarkModeProvider>
  );
}

export default App;
