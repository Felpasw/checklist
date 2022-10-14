
import axios from 'axios';
import React, {Fragment, useEffect, useState} from 'react';
import {Link, useHistory } from 'react-router-dom';
import 'bulma/css/bulma.min.css'



interface Checkist{
    _id: string,
    name: string,
    description: string,
    image: string
}

export default function Lists (){
    const [checkist, setChecklist] = useState([] as Checkist[]);
    const history = useHistory();

    const getItems = async ()  => {
        console.log("Alo porra entramo no getcu")
        axios.get('http://localhost:4000')
        .then((response) => setChecklist(response.data));
        console.log("Alo porra entramo no CARALHO")
      }

    useEffect(()=>{
       getItems();
        console.log("Ta suave")
    }, [])
    const edit = (_id: string): void =>{
        history.push(`/update/${_id}`)
        window.location.reload()
    }

    const handleRemove = (_id: string): void =>{
        console.log(_id)
        axios.delete(`http://localhost:4000/signup/${_id}`)
        window.location.reload()
    }
    const refreshPage = (): void => {
        window.location.reload()
  
      }
    let column = 1;
    return(
        <Fragment>
        <button className='buttons'  onClick = {() =>  refreshPage()}><Link to ="/new-checklist" >Cadastrar nova checkist</Link></button>
<div className='columns columns is-mobile'>
       
                { 
                checkist.map((element) => 
            <>
             <div className='box' >
             <div className='column is-4'></div>
            <hr />
                    <h1 className='title'>Nome: {element.name}</h1>
                    <h3 className='subtitle is-6'>Descrição: {element.description}</h3>
                    <img src= {`${element.image}`} alt="N carrgo essa porra :(" />
                    <div className="buttons are-medium">
                        <button className='button' onClick={() => handleRemove(element._id)}>Remover </button>
                        <button className='button' onClick={() => edit(element._id)}>Editar</button>
                    </div>
                </div>
            </>)}
        </div>
    </Fragment>
    )
    }
