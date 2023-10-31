
import React,{useState} from 'react';

const Edittodoform = ({updateTodo, task}) => {
    const [value,setValue]= useState("");

    const handleSubmit = e =>{
        e.preventDefault();

        updateTodo(value, task.id);
        setValue("");
    }

  return (
    <form className='Todoform' onSubmit={handleSubmit}> 
    <input type='text' value={value} className='todo-input' placeholder='Update the task' 
    onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit' className='todo-btn'>Edittodo</button>
    </form>
  )
}

export default Edittodoform