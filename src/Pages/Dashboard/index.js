import React, {useCallback, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import api from "../../APIs/api";


import NavPlaceHolder from "../../Components/common/NavPlaceholder";
import { addTask } from "../../Redux/Actions/actionCreator";

function Dashboard () {
  const user_id = 1

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState({
    user_id: user_id,
    task_title: '',
    task_description: '',
    task_start: Date(),
    task_deadline: ''
  })

  const handleInputChange = e => {
    const {name, value} = e.target
    setNewTask({
      ...newTask,
      [name]: value
    })
  }

  useEffect(() => {
    api.get(`tasks?user_id=${user_id}`).then(res => {
      const filteredData = res.data.filter(item => item.user_id === user_id)
      setTasks(filteredData[0].user_tasks)
    })}, [])
  
  //Disponibilizar o dispatch para fazer o realizar as ações
  const dispatch = useDispatch() 
  //Action de adicionar as tasks
  const handleAddTask = useCallback((task)=>{
    dispatch(addTask(task))
  },[dispatch])
  
  return (
    <>
      <NavPlaceHolder />
      <div className="dashboard">
          <table className="tasksTable">
            <thead className="tasksTable__head">
              <tr>
                <th>Task Name</th>
                <th>User</th>
                <th>Asign Date</th>
                <th>Deadline</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="tasksTable__body">
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
                    readOnly
                    value={newTask.task_deadline}
                    min={newTask.task_start}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                <input 
                    name='task_description' 
                    type="text"
                    value={newTask.task_description}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <button 
                    type='button'
                    onClick={() => handleAddTask(FormData)}
                  >
                    Add
                  </button>
                {console.log(newTask.task_start)}
                </td>
              </tr>  
            {tasks.map(task => (
              <tr key={task.task_id}>
                <td>{task.task_title}</td>
                <td>{user_id}</td>
                <td>{task.task_start}</td>
                <td>{task.task_deadline}</td>
                <td>{task.task_status}</td>
                <td>
                  <button type='button'>Complete</button>
                  <button type='button'>Edit</button>
                  <button type='button'>Delete</button>
                </td>
              </tr>  
            ))}
            </tbody>
          </table>
      </div>
    </>
  )
}


export default Dashboard