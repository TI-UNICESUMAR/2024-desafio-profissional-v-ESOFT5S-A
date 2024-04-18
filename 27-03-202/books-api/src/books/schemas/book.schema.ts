import { Schema, model } from 'mongoose'

const bookSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    ISBN: String,
    price: Number
}, { timestamps: true });

export default model("Book", bookSchema)