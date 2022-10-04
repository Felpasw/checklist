
import axios from 'axios';
import React, {Fragment, useEffect, useState} from 'react';
import {Link, useHistory } from 'react-router-dom';


interface Checkist{
    _id: string,
    name: string,
    description: string,
    image: string
}

export default function Lists (){
    const [checkist, setChecklist] = useState([] as Checkist[]);
    const history = useHistory();

    const getItems = async () => {
        console.log("Alo porra entramo no getcu")
        axios.get('http://localhost:4000')
        .then((response) => setChecklist(response.data));
        console.log("Alo porra entramo no CARALHO")
      }

    useEffect(()=>{
       getItems();
        console.log("Ta suave")
    }, [])
    const edit = (_id: string) =>{
        history.push(`/update/${_id}`)
    }

    const handleRemove = (_id: string) =>{
        console.log(_id)
        axios.delete(`http://localhost:4000/signup/${_id}`)
    }

    return(
        <Fragment>
            <ul>
                { checkist.map((element) => 
                <><li>Nome: {element.name} </li><li>Descrição: {element.description}  
                <button onClick={() => handleRemove(element._id)}>Remover </button> 
                <button onClick={() => edit(element._id)}>Editar</button></li>
                <img src= {`${element.image}`} alt="N carrgo essa porra :(" /> </>  )}
          </ul>
          <button onClick = {() => console.log("a")} ><Link to ="/new-checklist" >Cadastrar nova checkist</Link></button>
          </Fragment>
    )
    }
