import React,{useState} from 'react'
import InputContainer from './InputContainer';
import TaskList from './TaskList';

function ToDo() {
  const [ tasklist,setTasklist ] = useState(["Wake up At 5am","Do Yoga", "Make a project"]);

  function addNewItem (newtaskitem) {
    let newtasklist = [...tasklist,newtaskitem];
    setTasklist(newtasklist); 
    
  }

  function deleteTask(i){
    console.log(i);
    let newTaskArr = tasklist.filter((task,index)=>{
      return index != i;
    });
    setTasklist(newTaskArr);
  }

  return (
    <div>
        <div className='header'>
            <h1>TO - DO THINGS </h1>
        </div>
        <InputContainer addNewItem={addNewItem}></InputContainer>
        <TaskList tasklist={tasklist} deleteTask={deleteTask}></TaskList>
    </div>
  )
}

export default ToDo

