import {Schema,model} from "mongoose"

const authorSchema = new Schema({
    name: String  
})



export default model('Author', authorSchema)