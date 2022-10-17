
import {it, describe, expect} from 'vitest';
import checklistSchema from './database/models/checklist';
import Axios from 'axios';


//router tests

  //  it("can't create checklist without name, description or image", async () => {
  //   const checklist = new checklistSchema({
  //     description:"",
  //     image: ""
  //   })
  //   let post = await Axios.post("http://localhost:4000/signup", checklist)
  //   expect(post).rejects.toThrowError( /^Error! Expected name, description or image to be defined!$/)
  // })


  it('can create an checklist', async () =>{
    const checklist = ({
      name: "Espancar Juliano",
      description: "Juliano merece uma boa de umas pauladas",
      image:"https://ichef.bbci.co.uk/news/800/cpsprodpb/1175E/production/_106481517_gettyimages-172387616.jpg.webp"
    })
    expect(Axios.post('http://localhost:4000/signup', checklist)).resolves
    

  })

   it("can't create checklist without name, description or image", async () => {
    const checklist = new checklistSchema({
      description:"",
      image: ""
    })
    expect(Axios.post("http://localhost:4000/signup", checklist)).rejects.toThrowError( /^Checklist validation failed: name: Path `name` is required., description: Path `description` is required.$/)
  })

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



