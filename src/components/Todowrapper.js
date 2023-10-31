import React , {useState} from 'react';
import Todoform from './Todoform';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import Edittodoform from './Edittodoform';

uuidv4();

const Todowrapper = () => {
    const [todos,setTodos] = useState([]);

    const addTodo = todo => {
setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
console.log(todos)
    }

    const toogleComplete = id => {
      setTodos ( todos.map(todo=> todo.id === id ?{...todo, completed: !todo.completed} :todo ))
    
    }

    const todoDelete =id =>{
      setTodos(todos.filter(todo => todo.id !== id))
    }

    const todoEditing = id =>{
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} :todo))
    }

    const editTask = (task, id) =>{
      setTodos(todos.map(todo => todo.id ===id ? {...todo, task, isEditing: !todo.isEditing} :todo))
    }

  return (
    <div className='TodoWrapper'>
      <h1 >
        Todo List App
      </h1>
    <Todoform addTodo={addTodo}/>
    {
      todos.map((todo,index) => (
        todo.isEditing ? (
          <Edittodoform updateTodo={editTask} task={todo}/>
        ):
        (
          <Todo task={todo} key={index} toogleComplete={toogleComplete} todoDelete={todoDelete}
      todoEditing={todoEditing}/>
        )
      
      ))
    }
    
    </div>
  )
}

export default Todowrapper;