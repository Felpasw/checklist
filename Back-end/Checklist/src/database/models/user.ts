import mongoose from 'mongoose';

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
export default mongoose.model('user', user)