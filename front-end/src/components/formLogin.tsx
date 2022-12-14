import React, { Fragment, useState } from "react";
import Axios from 'axios'

import {  Link, useHistory } from "react-router-dom";


import {IoIosContact} from 'react-icons/io'
import{ImEnter} from 'react-icons/im'


let ZeroState = {
  name: '',
  password : ''
}  


export default function FormLogin (){
  const [formValues, setFormValues] = useState(ZeroState);
  const history = useHistory(); 

  const handleChange = (e: { target: { name: string; value: string; }; }): void =>{
    let name  = e.target.name;
    let  value = e.target.value;
    setFormValues({...formValues, [name]: value})

  }
  
  const refreshPage = (): void => {
    window.location.reload()
  }

  const handleSubimmit = async (e:  React.FormEvent) =>{
    e.preventDefault()
    const register ={
      name: formValues.name,
      password: formValues.password
    
  }
if (register.name && register.password) {
    const response= await Axios.post('http://localhost:4000/Login', register)
      if(response.data != null){
        console.log(response.data._id)
        history.push(`/Checklists/${response.data._id}`)
        refreshPage();
      }
      else{
        alert("Usuário não encontrado!")
      }
   
   

}
else{
  window.alert("Preencha todos os campos corretamente!")
}
}
  return(  
  <Fragment>
    <div className="columns">
        <div className="column is-4 is-offset-4">
        <br />
          <div className="box">
            <form onSubmit={(e) => handleSubimmit(e)}>
              <label htmlFor="name">Nome: </label>
              <input type="text" id='name' name="name" onChange={handleChange} value={formValues.name} className="input is-primary"/>
              <br />
              <label htmlFor="description">Senha: </label>
              <input type="password" id='description' name="password"  onChange={handleChange} value={formValues.password} className=" input is-primary"/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              <br />   
              <br />
              <div className="column is-offset-4">
                <button data-testid="SendButton"className="button is-medium is-primary is-outlined is-rounded"> <ImEnter/> Entrar </button>  
              </div>
          </form>
          <div className="column is-offset-4">
            <a href={"/Signup"}>
                <button data-testid="SignupButton"className="button is-medium is-primary is-outlined is-rounded"> <IoIosContact/>Cadastrar </button>
            </a>
          </div>
        </div>
    </div>
  </div>  
    </Fragment>)
}
