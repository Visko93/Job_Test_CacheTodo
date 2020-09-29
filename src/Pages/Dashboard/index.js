import React, {useEffect, useState} from "react";
// import { useSelector } from "react-redux";
import api from "../../APIs/api";

import NavPlaceHolder from "../../Components/common/NavPlaceholder";
import TableInput from "../../Components/Table/TableInput/Index";
import TableRow from "../../Components/Table/TableRow";

function Dashboard () {
  //proxy user
  const user_id = 1

  const INITIAL_STATE = {
    user_id: user_id,
    task_title: '',
    task_description: '',
    task_start: new Date().toISOString().substring(0,10),
    task_deadline: '',
  }
  
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState(INITIAL_STATE)
  
  
  useEffect(() => {
    api.get(`tasks?user_id=${user_id}`).then(res => {
      const filteredData = res.data.filter(item => item.user_id === user_id)
      setTasks(filteredData[0].user_tasks)
    })}, [])
    
    const handleInputChange = e => {
      const {name, value} = e.target
      setNewTask({
        ...newTask,
        [name]: value
      })
    }

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
              <TableInput props={{newTask, handleInputChange, user_id, setNewTask, INITIAL_STATE}} />
              {tasks.map(task => (
              <TableRow props={{task, user_id}} key={task.task_id}/>
            ))}
            </tbody>
          </table>
      </div>
    </>
  )
}


export default Dashboard