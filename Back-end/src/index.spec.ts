
import {expect, it} from 'vitest';
import checklistSchema from './database/models/checklist';

//instance tests
it('can create an checklist', () =>{
  const checklist = new checklistSchema({
    name: "Espancar Juliano",
    description: "Juliano merece uma boa de umas pauladas",
    image:"https://ichef.bbci.co.uk/news/800/cpsprodpb/1175E/production/_106481517_gettyimages-172387616.jpg.webp"
  })
   expect(checklist).instanceOf(checklistSchema)
   expect(checklist.name).toBeDefined()
   expect(checklist.image).toBeDefined()
   expect(checklist.description).toBeDefined()
})

it("can't create checklist without name, description or image", () => {
  const checklist = new checklistSchema({
    
    description:"",
    image: ""
  })
  expect(checklist).instanceOf(checklistSchema)
  expect(checklist.name).toBeDefined()
  expect(checklist.image).toBeDefined()
  expect(checklist.description).toBeDefined()
})

//routes tests


