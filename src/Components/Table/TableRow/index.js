import React from "react";

function TableRow ({props}) {
  const { task, user_id} = props

  return (
    <tr>
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
  )
}

export default TableRow