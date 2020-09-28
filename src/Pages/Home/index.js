import React from "react";

import MainForm from "../../Components/Form/MainForm";
import './style.css'

function Home () {

    //
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__cover">
            <h1 className="header__title">
              Built for a job
            </h1>
            <p className="header__text">
              GitHub is a development platform inspired by the way you work. 
              From open source to business, you can host and review code,
              manage projects, and build software alongside 50 million 
              developers.
            </p>
          </div>
        <MainForm 
          onSubmit={()=>{}} 
          onChange={()=>{}} 
          value={''} 
          input={''} 
          error={''} 
          isLoading={false}
        />
        </div>
      </div>
    </>
  )
}


export default Home