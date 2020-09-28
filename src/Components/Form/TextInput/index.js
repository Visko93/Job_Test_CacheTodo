import React from "react"; 

//(nome, email, data de nascimento, cpf, cep, endereço, numero, senha);
import './style.css'


function TextInput(props) {
  
  return (
    <>
      <input
      placeholder={`name`}
      className='form__input' 
      type={''} 
      name="username" 
      value={''} 
      onChange={''}/>
    </>
  )
}

export default TextInput