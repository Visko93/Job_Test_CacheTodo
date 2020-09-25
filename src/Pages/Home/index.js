import React, { useState } from "react";

import MainForm from "../../Components/Form/MainForm";
import './style.css'

function Home () {
  const [errors, setErrors] = useState({})
  const [isLoading, setloading] = useState(false)
  const [userAddress, setUserAddress] = useState({})
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    birthDate: undefined,
    cpf: '',
    senha: ''
  })
  //Calcula pela data de nascimento 
  setloading(false)
  setUserAddress({cep: 0, cidade: '', estado: '', endereço: '',  numero: 0})
  setUserData({ name: '',
                email: '',
                birthDate: undefined,
                cpf: '',
                senha: ''})

  function formIsValid() {
    const _errors = {};

    if (!userData.name) _errors.title = "Name is required";
    if (!userData.email) _errors.email = "Email is required";
    if (!userData.birthDate) _errors.birthDate = "Birth date is required";
    if (!userData.cpf) _errors.cpf = "CPF is required";
    if (!userData.senha) _errors.senha = "Birth date is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleChange (e) {

  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!formIsValid()) return;
    
  //   loginActions.saveUser(userData, userAddress).then(() => {
  //     props.history.push('/Dashboard');
  //     toast.success('Login Realizado.');
  //   });
  // }


  return (
    <div className="header">
      <div className="header__cover">
        <h1 className="header__title">
          Built for developers
        </h1>
        <p className="header__text">
          GitHub is a development platform inspired by the way you work. 
          From open source to business, you can host and review code,
          manage projects, and build software alongside 50 million 
          developers.
        </p>
      </div>
      <MainForm 
        errors={errors}
        userData={userData}
        onChange={handleChange}
        authors={userAddress}
        isLoading={isLoading}
        onSubmit={()=>{}}
      />
    </div>
  )
}


export default Home