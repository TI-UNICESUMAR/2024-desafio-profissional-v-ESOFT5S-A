import { Schema, model } from 'mongoose'
import { Category } from '../types/category'

const categorySchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true }
}, {
    timestamps: true
})

export default model<Category>('Category', categorySchema)