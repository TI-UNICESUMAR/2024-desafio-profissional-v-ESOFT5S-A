import { Schema, model } from 'mongoose'

const bookSchema = new Schema({
    title: String,
    author: String,
    ISBN: String,
    price: Number
}, {
    timestamps: true
})

export default model('Book', bookSchema)