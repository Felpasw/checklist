import { RequestHandler } from "express";
import Checklist from '../database/models/checklist'
//------------------------------------------------------------------------
export const postChecklist = async (req: { body: { name: String; description: String }
}, res: any ) =>{
     console.log(req.body);
        const ChecklistToAdd = new Checklist({
            name: req.body.name,
            description: req.body.description
        })
        ChecklistToAdd.save().then((data) => {
            console.log(data);
        })
        res.status(200);
        return res.json(); 
    }
//-----------------------------------------------------------------------
export const delChecklist: RequestHandler = async (req , res) => {
    console.log(req.params.id);
    try {
        const delChecklist=  await Checklist.findByIdAndDelete(req.params.id);
        console.log(delChecklist);
    } catch (error) {
        console.log(error)   
    }
    
}
//------------------------------------------------------------------------
export const updateChecklist: RequestHandler = async (req, res) =>{
    const videoUpdate = await Checklist.findByIdAndUpdate(req.params.id, req.body);
    console.log(videoUpdate);
}
//------------------------------------------------------------------------
export const getChecklist: RequestHandler = async (req, res) =>{
    console.log("getChecklist")
    try {
    const checklists = await Checklist.findById(req.params.id);
    return res.json(checklists);
   } catch (error) {
        console.log("erro no get de uma checklist.... \n", error);
   }
    
}
//------------------------------------------------------------------------
export const getChecklists: RequestHandler = async (req, res) =>{
    console.log("Getting Localhost:4000")
    try {
      
        const checklists = await Checklist.find();
        return res.json(checklists);
    } catch (error) {
        console.log("Erro no get das checklists...\n", error);
    }
}
//------------------------------------------------------------------------
