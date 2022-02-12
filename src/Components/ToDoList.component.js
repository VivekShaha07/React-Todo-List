import React, {useState,useReducer ,useEffect} from "react";

import ToDoForm from "./ToDoForm.component";
import ToDo from "./ToDo.component";

const ToDoList = () => {

  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('to-do');
    return localData ? JSON.parse(localData) : []
  });

  const addToDo = (todo) =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    };

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  useEffect(() => {
    localStorage.setItem("to-do", JSON.stringify(todos));
  }, [todos])

  const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
  }

  const completeToDo = (id) =>{
    let updatedTodos = todos.map(todo => {
      if (todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return(
    <>
      <h1 className='text-2xl font-bold text-center my-8 text-border-color'>My To Do List</h1>
      <ToDoForm onSubmit={addToDo}/>
      <ToDo 
      todos = {todos}
      completeToDo={completeToDo}
      removeTodo={removeTodo}
      />
    </>
  );
};


export default ToDoList;
