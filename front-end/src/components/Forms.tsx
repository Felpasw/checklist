import React, { Fragment, useState } from "react";
import Axios from 'axios';



const ZeroState = {
    name: '',
    description: ''
  }
  
  
  function App() {
    const [formValues, setFormValues] = useState(ZeroState);
  
    const handleChange = (e: { target: { name: string; value: string; }; }) =>{
      let name  = e.target.name;
      let  value = e.target.value;
      setFormValues({...formValues, [name]: value})
  
      console.log(`${name} \n ${value}`)
    }
  

    const handleSubimmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault(); 
        const register ={
            name: formValues.name,
            description: formValues.description
        }
      Axios.post('http://localhost:4000/signup', register);
    }
  
    return (    
      <Fragment>
      <form onSubmit={handleSubimmit}>
        <label htmlFor="name">Nome: </label>
        <input type="text" id='name' name="name" onChange={handleChange} value={formValues.name}/>
        <br />
        <label htmlFor="description">Descrição: </label>
        <input type="text" id='description' name="description" onChange={handleChange} value={formValues.description}/>
        <button>Enviar</button>    
      </form>
      </Fragment>
    );
  }
  
  export default App; 
