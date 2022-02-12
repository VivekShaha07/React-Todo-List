import React, {useState} from "react";


const ToDoForm = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('')
  };

  

  return(
    <div className="grid place-content-center">
      <form onSubmit={handleSubmit}>
        <input  
        placeholder="Write your Task Here" 
        value={input} 
        name='text' 
        className="border-4 border-button-color px-3 mx-10 my-10 w-60 h-10 rounded-lg"
        onChange={handleChange}
        />
        <button className="border-4 border-border-color px-3 h-10 rounded-lg bg-button-color font-bold text-border-color">Add Task</button>
      </form>
    </div>
  );

};

export default ToDoForm;

