import { Schema, model, Document } from "mongoose";

interface Category extends Document {
    name:String;
    color:String;
}

const categorySchema = new Schema<Category>({
    name:String,
    color:String
}, {
    versionKey: false
});

export default model<Category>('Category', categorySchema);
 
