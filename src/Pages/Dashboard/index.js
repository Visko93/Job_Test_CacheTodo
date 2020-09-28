import React from "react";
import { useSelector } from "react-redux";


import NavPlaceHolder from "../../Components/common/NavPlaceholder";

function Dashboard () {
  const tasks = useSelector(state => state)
  
  console.log(tasks)
  
  return (
    <>
      <NavPlaceHolder />
      <div className="dashboard">
        Dashboard
      </div>
    </>
  )
}


export default Dashboard