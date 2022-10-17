import  { Fragment, useState, useEffect} from "react";
import Axios from 'axios';
import {Link, useParams, useHistory} from 'react-router-dom';
import axios from "axios";
import 'bulma/css/bulma.min.css'

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


    const handleChange = (e: { target: { name: string; value: string; }; }): void =>{
      let name  = e.target.name;
      let  value = e.target.value;
      setFormValues({...formValues, [name]: value})
  
      console.log(`${name} \n ${value}`)
    }
  
    const handleSubimmit = (): void =>{
        
      const register ={
            name: formValues.name,
            description: formValues.description,
            image: formValues.image
        }
      if (register.name && register.description && register.image) {
        Axios.post('http://localhost:4000/signup', register)
      }
      else{
        
        window.alert("Preencha todos os campos corretamente!")
        
      } 
      
    }


    const handleUpdate = (): void =>{
      const register ={
        name: formValues.name,
        description: formValues.description,
        image: formValues.image
    }
      if (register.name && register.description && register.image) {
          Axios.put(`http://localhost:4000/signup/${Params.id}`, register);
      }
      else{
          window.alert("Preencha todos os campos corretamente!")
      } 
  
}

    const refreshPage = (): void => {
      window.location.reload()
    }

if(Params.id){
  return (    
    <Fragment>
    <div className="columns" id="forms">
    <div className="column is-4 is-offset-4">
    <div className="box">
    <form onSubmit={() => handleUpdate()}>
      <label htmlFor="name">Nome: </label>
      <input type="text" id='name' name="name" onChange={handleChange} value={formValues.name}className ="input"/>
      <br />
      <label htmlFor="description">Descrição: </label>
      <input type = "text" id='description' name="description"  onChange={handleChange} value={formValues.description} className ="input"/>
      <br />  
      <label htmlFor="description" > Imagem Motivacional: </label>
      <input type="text" id='image' name="image" onChange={handleChange} value={formValues.image} className ="input"/>
      <hr />
        <button onClick={() => refreshPage()} data-testid="EditButton"className="button"> Editar </button>
        
      <button onClick={() => refreshPage()}className="button"><Link to ="/"> Voltar </Link> </button> 
       
    </form>
    </div>
    </div>
    </div>
    </Fragment>
  );
}
else{
  return (    
    <Fragment>
    <div className="columns">
        <div className="column is-4 is-offset-4">
        <div className="box">
          <form onSubmit={() => handleSubimmit()}>
          <label htmlFor="name">Nome: </label>
          <input type="text" id='name' name="name" onChange={handleChange} value={formValues.name} className="input"/>
          <br />
          <label htmlFor="description">Descrição: </label>
          <input type = "text" id='description' name="description"  onChange={handleChange} value={formValues.description} className ="input"/>
          <br />  
          <label htmlFor="description"> Imagem Motivacional: </label>
          <input type="text" id='image' name="image" onChange={handleChange} value={formValues.image} className ="input"/>
          <hr />
          <button data-testid="SendButton" className="button"> Enviar </button>
          <button onClick={() => refreshPage()}className="button"><Link to ="/"> Voltar </Link> </button> 
          </form>
        </div>
    </div>
    </div>
    </Fragment>
  );
}
}



  export default App; 
