import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../Redux/Actions/actionCreator";




function TableInput ({props}) {

  const {newTask, handleInputChange, user_id, setNewTask, INITIAL_STATE} = props
  
  //Disponibilizar o dispatch para fazer o realizar as ações
  const dispatch = useDispatch() 
    //Action de adicionar as tasks
  const handleAddTask = useCallback((task)=>{
    if(!task.task_title) {
        return alert('Every task needs a title.')
    }
    if(!task.task_deadline) {
        return alert('You need to assign a deadline.')
    }
    dispatch(addTask(task))
    setNewTask(INITIAL_STATE)
  },[INITIAL_STATE, dispatch, setNewTask])
    

  return (
    <tr>
    <td>
      <input 
        name='task_title' 
        type="text"
        value={newTask.task_title}
        onChange={handleInputChange}
      />
    </td>
    <td 
        name='user_id'>
        {user_id}
    </td>
    <td>
      <input 
        name='task_start' 
        type="date" 
        value={newTask.task_start}
        max={newTask.task_deadline}
        onChange={handleInputChange}
      />
    </td>
    <td>
      <input 
        name='task_deadline' 
        type="date"
        value={newTask.task_deadline}
        min={newTask.task_start}
        onChange={handleInputChange}
      />
    </td>
    <td>
    <textarea 
        name='task_description' 
        type="text"
        placeholder='Description'
        value={newTask.task_description}
        onChange={handleInputChange}
      />
    </td>
    <td>
      <button 
        type='button'
        onClick={() => handleAddTask(newTask)}
      >
        Add
      </button>
    </td>
  </tr>  
  )
}

export default TableInput