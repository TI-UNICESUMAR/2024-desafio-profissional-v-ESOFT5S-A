import { Schema, model } from 'mongoose'

const bookSchema = new Schema({
    title: String,
    author: String,
    ISBN: String,
    pageNumber: Number
}, {
    timestamps: true
})

export default model('Books', bookSchema)