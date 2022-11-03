import{ RequestHandler, NextFunction } from "express";
import Checklist from '../database/models/checklist'
import user from "../database/models/user";


//------------------------------------------------------------------------
export const postChecklist: RequestHandler = async (req: { body: { name: string; description: string, image:string, DWeek: string, userID: string}
}, res: any) =>{
        try {
            const ChecklistToAdd = new Checklist({
                //UserId = req.body.userId,
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                DWeek: req.body.DWeek,
                userID: req.body.userID
                })
            ChecklistToAdd.save().then((data) => {
                console.log(data);
            })
            res.status(200);
            return res.json(ChecklistToAdd); 
        } catch (error: unknown) {
            res.status(401)
            return error
        } 
        }
//-----------------------------------------------------------------------
export const delChecklist: RequestHandler = async (req , res) => {
    console.log(req.params.id);
    try {
        const delChecklist=  await Checklist.findByIdAndDelete(req.params.id);
        res.status(200)
        res.json(delChecklist)
    } catch (error) {
        console.log(error)   
    }
    
}
//------------------------------------------------------------------------
export const updateChecklist: RequestHandler = async (req, res) =>{
    const checklistToUpdate = await Checklist.findByIdAndUpdate(req.params.id, req.body);
    console.log(checklistToUpdate);
    res.status(200)
}
//------------------------------------------------------------------------
export const getChecklist: RequestHandler = async (req, res) =>{
    console.log("getChecklist")
    try {
        const checklists = await Checklist.findById(req.params.id);
        console.log(checklists)
        res.status(200)
        return res.json(checklists);
    
   } catch (error) {
        res.status(404)
        console.log("erro no get de uma checklist.... \n", error);
   }
    
}
//------------------------------------------------------------------------
export const getChecklists: RequestHandler = async (req, res) =>{
    console.log("Getting Localhost:4000")
    try {
       const checklistToFind  = {
            userID: req.params.id
        }
        const checklists = await Checklist.find(checklistToFind);
        console.log(checklists)
        res.status(200)
        return res.json(checklists);
       
    } catch (error) {
        res.status(404)
        console.log("Erro no get das checklists...\n", error);
    }
}

//------------------------------------------------------------------------
export const postSignup: RequestHandler = async (req:{ body: {name: string, password: String } }, res) =>{
    try {
        const UserToAdd = new user({
            name: req.body.name,
            password: req.body.password
            })
        UserToAdd.save().then((data) => {
            console.log(data);
        })
        res.status(200);
        return res.json(UserToAdd); 

    } catch (error) {
        res.status(400)
        console.log(error);
        console.log("Erro no Signup")        
    }
}
//------------------------------------------------------------------------
export const postLogin: RequestHandler = async (req, res) =>{
    try {
        const userToFind = {
            name: req.body.name,
            password: req.body.password
        } 
        const userFound = await user.findOne(userToFind)
        res.status(200)
        console.log(userFound)
        return res.json(userFound)

    } catch (error) {
        res.status(404)
        console.log(error)   
    }
}
