import {Schema,model} from "mongoose"

const authorSchema = new Schema({
    name: String  
},{
    versionKey:false
})



export default model('Author', authorSchema)