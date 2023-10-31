import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Todo = ({task, toogleComplete ,todoDelete ,todoEditing}) =>{
  return (
    <div className='Todo'>
        <p onClick={()=>toogleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=> todoEditing(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={()=> todoDelete(task.id)}/>
        </div>
    </div>
  )
}

export default Todo