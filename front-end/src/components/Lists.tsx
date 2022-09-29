
import axios from 'axios';
import React, {useEffect, useState} from 'react';
//import checklist from './backend/Database/models/checklist';

interface Checkist{
    id: string,
    name: string,
    description: string
}

export default function Lists (){
    const [checkist, setChecklist] = useState([] as Checkist[]);

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
  
    const handleRemove = (id: string) =>{
        axios.delete(`http://localhost:4000/signup/${id}`)
    }
    // const handleRemoveChange = (id: typeof mongoose.Types.ObjectId.toString) => {
    //     axios.put(`http://localhost:4000/signup/${id}`)
    // }
    return(

            <ul>
                { checkist.map((element) => 
                <><li>Nome: {element.name} </li><li>Descrição: {element.description}  <button onClick={() => handleRemove(element.id)}>Remover </button> <button> Editar </button></li> </> )}
          </ul>
        
    )
    }
