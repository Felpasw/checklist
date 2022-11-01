import mongoose from 'mongoose';


mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://felipasso:felipasso@cluster0.fovabzu.mongodb.net/users?retryWrites=true&w=majority").then(() => console.log("Conected to mongoDB!"));


const user =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
   }
    
}) 
export default mongoose.model('users', user)