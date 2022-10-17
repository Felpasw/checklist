import mongoose from 'mongoose';


mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://felipasso:felipasso@cluster0.fovabzu.mongodb.net/checklists?retryWrites=true&w=majority").then(() => console.log("Conected to mongoDB!"));


const Checklist =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    } 
}) 
export default mongoose.model('Checklist', Checklist)