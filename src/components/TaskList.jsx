import React, { useState } from "react";

function TaskList(props) {
 
  
  return (
    <div className="tasklist">
      <ul>
        {props.tasklist.map((task,index) => {
          return (
            <li className="listitem" key={index+1}>
              
              <span className="task">{task}</span>
              <button className="delete" onClick={()=>{props.deleteTask(index)}}>Delete</button>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TaskList;
