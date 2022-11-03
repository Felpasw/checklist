
import axios from 'axios';
import React, {Fragment, useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import 'bulma/css/bulma.min.css'
import Navbar from "../components/navbar";
import {Checkist, Dweek } from "./Forms"
import Footer from "../components/footer";


interface Params{
    id: string,
    userID: string
  }
  
export default function Lists (){
    const [checkist, setChecklist] = useState([] as Checkist[]);
    const history = useHistory();
    const params: Params = useParams();
    console.log(params)

    const getItems = async ()  => {
        console.log("Alo porra entramo no getcu")
        axios.get(`http://localhost:4000/${params.id}`)
        .then((response: { data: React.SetStateAction<Checkist[]>; }) => setChecklist(response.data));
        console.log("Alo porra entramo no CARALHO")
      }

    useEffect(()=>{
       getItems();
        console.log("Ta suave")
    }, [])
    const edit = (_id: string, userID:String): void =>{
        history.push(`/update/${_id}/user/${userID}`)
        window.location.reload()
    }

    const handleRemove = (_id: string): void =>{
        console.log(_id)
        axios.delete(`http://localhost:4000/Checklist/${_id}`)
        window.location.reload()
    }
     
      
    return(
        <Fragment>
           <Navbar userID =  {params.userID}/>
           <br /> 
    <div className='columns is-multiline'>
            { 
                checkist.map( (element) =>
              
            <>   <br />
                  <div className='column is-4 ' >
                  <div className="card bg-blur">
             <div className='box'>
            <div className='is-primary'>
            <hr />
         
                    <h1 className='title'>Nome: {element.name}</h1>
                    <h3 className='subtitle is-6'>Descrição: {element.description}</h3>
                    <h3 className='subtitle is-5'>Dia da semana a ser feito: {element.DWeek}</h3>
                    <figure className='image  is-128x128'>
                    <img src= {`${element.image}`} alt="N carrgo essa porra :("  className='is-rounded'/>
                    </figure>

                    <div className="buttons are-medium ">
                        <button className='button is-primary is-outlined is-rounded' onClick={() => handleRemove(element._id)}>Remover </button>
                        <button className='button is-primary is-outlined is-rounded' onClick={() => edit(element._id, element.userID)}>Editar</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </>
            
           )}
        </div>
        <Footer/>
    </Fragment>
    
    )  
}
//}
