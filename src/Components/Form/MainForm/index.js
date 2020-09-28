import React from "react"; 

import TextInput from "../TextInput";
//(nome, email, data de nascimento, cpf, cep, endereço, numero, senha);

import './style.css'

function MainForm(props) {
  const data = props
  return (
    <div className="form">
      <form onSubmit={props.onSubmit}>
        <h3 className="form__title">User Registration</h3>
        <div className="form__block">
          <TextInput
            data={data}
          />
          <TextInput
            data={data}
          />
        </div>
        <TextInput
          data={data}
        />
        <TextInput
          data={data}
        />
        <TextInput
          data={data}
        />
        <TextInput
          data={data}
        />
        <TextInput
          data={data}
        />
        <TextInput
          data={data}
        />
        <input type="submit" value="Register" className="form__btn" />
      </form>
    </div>
  )
}

export default MainForm