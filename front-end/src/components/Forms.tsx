import React, { Fragment, useState, useEffect} from "react";
import Axios from 'axios';
import {Link, useParams, useHistory} from 'react-router-dom';
import axios from "axios";

interface Params{
  id: string
}
interface Checkist{
  _id: string,
  name: string,
  description: string,
  image: string
}
//----------------------------------------------
let ZeroState: Checkist = {
        _id: '',
        name: '',
        description: '',
        image: ''
      }  

async function GetCheckklist(id: string){
  let checklistfound: Checkist = await axios.get(`http://localhost:4000/signup/${id}`).then(response=> {return response.data})
  console.log(checklistfound)
  return checklistfound
}

//----------------------------------------------
  function App() {
    const Params: Params  = useParams();
    useEffect(() => {
      console.log("Alo, sexo tranquilo e agendado!")
      if(Params.id){
        GetCheckklist(Params.id).then(data => setFormValues(data))
        console.log("VAI TOMAR NO CU!")
      }
      console.log("tmj")
     
    },[]) 
    console.log(Params)
    const [formValues, setFormValues] = useState(ZeroState);


    const handleChange = (e: { target: { name: string; value: string; }; }) =>{
      let name  = e.target.name;
      let  value = e.target.value;
      setFormValues({...formValues, [name]: value})
  
      console.log(`${name} \n ${value}`)
    }
  
    const handleSubimmit = () =>{
        const register ={
            name: formValues.name,
            description: formValues.description,
            image: formValues.image
        }
      Axios.post('http://localhost:4000/signup', register);
    }


    const handleUpdate = (id: string) =>{
      const register ={
        name: formValues.name,
        description: formValues.description,
        image: formValues.image
    }
  Axios.put(`http://localhost:4000/signup/${Params.id}`, register);
}

if(Params.id){
  return (    
    <Fragment>
    <form onSubmit={() => handleUpdate(formValues._id)}>
      <label htmlFor="name">Nome: </label>
      <input type="text" id='name' name="name" onChange={handleChange} value={formValues.name}/>
      <br />
      <label htmlFor="description">Descrição: </label>
      <input type = "text" id='description' name="description"  onChange={handleChange} value={formValues.description}/>
      <br />  
      <label htmlFor="description"> Imagem Motivacional: </label>
      <input type="text" id='image' name="image" onChange={handleChange} value={formValues.image}/>
      <hr />
        <button> Editar </button>
        
      <button><Link to ="/"> Voltar </Link> </button> 
       
    </form>
    </Fragment>
  );
}
else{
  return (    
    <Fragment>

    <form onSubmit={() => handleSubimmit()}>
    <label htmlFor="name">Nome: </label>
      <input type="text" id='name' name="name" onChange={handleChange} value={formValues.name}/>
      <br />
      <label htmlFor="description">Descrição: </label>
      <input type = "text" id='description' name="description"  onChange={handleChange} value={formValues.description}/>
      <br />  
      <label htmlFor="description"> Imagem Motivacional: </label>
      <input type="text" id='image' name="image" onChange={handleChange} value={formValues.image}/>
      <hr />
        <button> Enviar </button>
        
      <button><Link to ="/"> Voltar </Link> </button> 
       
    </form>
    </Fragment>
  );
}
}



  export default App; 
