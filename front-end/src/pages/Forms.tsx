import  { Fragment, useState, useEffect} from "react";
import {Link, useParams, useHistory, Redirect} from 'react-router-dom';
import axios from 'axios';
import 'bulma/css/bulma.min.css'
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface Params{
  id: string,
  userID: string
}
export type Dweek = "Domingo" | "Segunda-Feira" | "Terça-feira" | "Quarta-Feira" | "Quinta-Feira" | "Sexta-Feira" | "Sábado"
 export interface Checkist{
  _id: string,
  name: string,
  description: string,
  image: string,
  DWeek: Dweek,
  userID: string
}

//----------------------------------------------

async function GetCheckklist(id: string){
  let checklistfound: Checkist = await axios.get(`http://localhost:4000/Checklist/${id}`).then((response: { data: any; })=> {return response.data})
  console.log(checklistfound)
  return checklistfound
}

//----------------------------------------------
  function App() {
    const Params: Params  = useParams();

    let ZeroState: Checkist = {
      _id: '',
      name: '',
      description: '',
      image: '',
      DWeek: 'Domingo' ,
      userID: Params.userID
    }  

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
            image: formValues.image,
            DWeek: formValues.DWeek,
            userID: Params.userID
        }
      if (register.name && register.description && register.image && formValues.DWeek) {
        axios.post('http://localhost:4000/Checklist', register)
      }
      else{
        window.alert("Preencha todos os campos corretamente!")
      }
      
    }


    const handleUpdate = (): void =>{
      const register ={
        name: formValues.name,
        description: formValues.description,
        image: formValues.image,
        DWeek: formValues.DWeek,
        userID: Params.userID
    }
      if (register.name && register.description && register.image && formValues.DWeek) {
          axios.put(`http://localhost:4000/Checklist/${Params.id}`, register);
      }
      else{
          window.alert("Preencha todos os campos corretamente!")
      } 
  
}

    const refreshPage = (): void => {
      window.location.reload()
    }


if(Params.userID){
      if(Params.id){
        return (    
          <Fragment>
          <Navbar userID =  {Params.userID}/>
          <div className="columns">
              <div className="column is-4 is-offset-4">
              <br />
              <div className="box">
                <form onSubmit={() => handleUpdate()}>
                <label htmlFor="name">Nome: </label>
                <input type="text" id='name' name="name" onChange={handleChange} value={formValues.name} className="input is-primary"/>
                <br />
                <label htmlFor="description">Descrição: </label>
                <textarea id='description' name="description"  onChange={handleChange} value={formValues.description} className="textarea is-primary"/>
                <br />  
                <label htmlFor="image"> Ícone (Envie um link): </label>
                <input type="link" id='image' name="image" onChange={handleChange} value={formValues.image} className="input is-primary"/>
                <label htmlFor="DWeek">Dia da Semana Desejado:</label>
                <div className="field has-addons">
                  <div className="control is-expanded">
                  <div className="select is-fullwidth is-primary">
                  <select name="DWeek" id="DWeek" onChange={handleChange}>
                      <option value="Domingo">Domingo</option>
                      <option value="Segunda-Feira">Segunda-Feira</option>
                      <option value="Terça-Feira">Terça-Feira</option>
                      <option value="Quarta-Feita">Quarta-Feita</option>
                      <option value="Quinta-Feira">Quinta-Feira</option>
                      <option value="Sexta-Feira">Sexta-Feira</option>
                      <option value="Sábado">Sábado</option>
                  </select>
                  <hr />
                  <br />
          </div>
        </div>
        </div>  
        <br />
                  <div className="column is-offset-4">
                    <button onClick={() => refreshPage()} data-testid="SendButton"className="button is-medium is-primary is-outlined is-rounded"> Editar </button>
                  </div>
                </form>
              </div>
          </div>
          </div>  
          <Footer/>
          </Fragment>
        );
      }
      else{
        return (    
          <Fragment>
            <Navbar userID =  {Params.userID}/>
          <div className="columns">
              <div className="column is-4 is-offset-4">
              <br />
              <div className="box">
                <form onSubmit={() => handleSubimmit()}>
                <label htmlFor="name">Nome: </label>
                <input type="text" id='name' name="name" onChange={handleChange} value={formValues.name} className="input is-primary"/>
                <br />
                <label htmlFor="description">Descrição: </label>
                <textarea id='description' name="description"  onChange={handleChange} value={formValues.description} className="textarea is-primary"/>
                <br />  
                <label htmlFor="image"> Ícone (Envie um link): </label>
                <input type="link" id='image' name="image" onChange={handleChange} value={formValues.image} className="input is-primary"/>
                <label htmlFor="DWeek">Dia da Semana Desejado:</label>
                <div className="field has-addons">
                  <div className="control is-expanded">
                  <div className="select is-fullwidth is-primary">
                  <select name="DWeek" id="DWeek" onChange={handleChange}>
                      <option value="SDomingo">Domingo</option>
                      <option value="Segunda-Feira">Segunda-Feira</option>
                      <option value="Terça-Feira">Terça-Feira</option>
                      <option value="Quarta-Feita">Quarta-Feita</option>
                      <option value="Quinta-Feira">Quinta-Feira</option>
                      <option value="Sexta-Feira">Sexta-Feira</option>
                      <option value="Sábado">Sábado</option>
                  </select>
                  <hr />
                  <br />
          </div>
        </div>
        </div>  
        <br />
                  <div className="column is-offset-4">
                    <button onClick={() => refreshPage()} data-testid="SendButton"className="button is-medium is-primary is-outlined is-rounded"> Enviar </button>
                  </div>
                </form>
              </div>
          </div>
          </div>
          <Footer/>
          </Fragment>
        );
      }

}
else{
  return(<h1>Invalid!!</h1>)
  }
}



  export default App; 
