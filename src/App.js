import React from 'react';
import './App.css';

import ToDoList from './Components/ToDoList.component';

function App() {
  return (
    <>
      <div className='bg-toDoBlue'>
        <h1 className='text-3xl font-bold text-center text-border-color'>To-Do List App</h1>
        <ToDoList/>
      </div>
    </>
    
  );
}

export default App;