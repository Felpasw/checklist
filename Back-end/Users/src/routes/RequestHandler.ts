import{ RequestHandler, NextFunction } from "express";
import user from '../database/models/user'


//------------------------------------------------------------------------
export const postSignup: RequestHandler = async (req, res) =>{
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
