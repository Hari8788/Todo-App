import React,{useState} from 'react';

const Todoform = ({addTodo}) => {
    const [value,setValue]= useState("");

    const handleSubmit = e =>{
        e.preventDefault();

        addTodo(value);
        setValue("");
    }

  return (
    <form className='Todoform' onSubmit={handleSubmit}> 
    <input type='text' value={value} className='todo-input' placeholder='Enter the task' 
    onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit' className='todo-btn'>ADD</button>
    </form>
  )
}

export default Todoform