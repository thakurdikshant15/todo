import React, { useState } from 'react'
import ToDo from './ToDo';

function InputContainer(props) {
  const [ newTask, setNewTask ] = useState("")
  
  function addTask(e){
    props.addNewItem(newTask);
    setNewTask("");    
  }
  
  return (
    <div className='inputContainer'>
        <input type='text' value={newTask} onChange={(e)=>{setNewTask(e.target.value)}}></input>
        <button className='addtask' onClick={addTask}>Add Task</button>

      
    </div>
  )
}

export default InputContainer

