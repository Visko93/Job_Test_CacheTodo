import React from "react"; 

import TextInput from "../TextInput";
//(nome, email, data de nascimento, cpf, cep, endereço, numero, senha);

function MainForm(props) {
  
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        onChange={props}
        value={props}
        error={props}
      />
     <input type="submit" value="Save" className="form__btn" />
    </form>
  )
}

export default MainForm