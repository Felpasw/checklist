
import {it, describe, expect} from 'vitest';
import checklistSchema from './database/models/checklist';
import Axios from 'axios';
import { nextTick } from 'process';


//router tests

  //  it("can't create checklist without name, description or image", async () => {
  //   const checklist = new checklistSchema({
  //     description:"",
  //     image: ""
  //   })
  //   let post = await Axios.post("http://localhost:4000/signup", checklist)
  //   expect(post).rejects.toThrowError( /^Error! Expected name, description or image to be defined!$/)
  // })


  it.concurrent('can create an checklist', async () =>{
    const checklist = ({
      name: "Espancar Juliano",
      description: "Juliano merece uma boa de umas pauladas",
      image:"https://ichef.bbci.co.uk/news/800/cpsprodpb/1175E/production/_106481517_gettyimages-172387616.jpg.webp"
    })
     const responsePOST = await Axios.post('http://localhost:4000/signup', checklist)
     expect(responsePOST.status).toBe(200)
     const responseDEL = await Axios.delete(`http://localhost:4000/signup/${responsePOST.data._id}`)
     expect(responseDEL.status).toBe(200)
  })

  //  it("can't create checklist without name, description or image", async () => {
  //   const checklist = new checklistSchema({
  //     description:"",
  //     image: ""
  //   })
    
  //   expect
  //   expect(Axios.post("http://localhost:4000/signup", checklist)).rejects.toThrowError( /^Checklist validation failed: name: Path `name` is required., description: Path `description` is required.$/)
  // })

it('can update an checklist', () =>{
  // const checklist = ({
  //   name: "Espancar Juliano",
  //   description: "Juliano merece uma boa de umas pauladas",
  //   image:"https://ichef.bbci.co.uk/news/800/cpsprodpb/1175E/production/_106481517_gettyimages-172387616.jpg.webp"
  // })
  // expect(Axios.put("http://localhost:4000/signup")..toThrowError( /^Checklist validation failed: name: Path `name` is required., description: Path `description` is required.$/)

})

it('can delate an checklist', () =>{

   
})



