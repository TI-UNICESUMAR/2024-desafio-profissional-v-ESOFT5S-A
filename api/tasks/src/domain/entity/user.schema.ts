import { Schema, model } from 'mongoose'
import { User } from '../types/user'

const userSchema = new Schema({
    username: { type: String, required: true },
    weight: Number,
    password: String,
    email: String
}, {
    timestamps: true
})

export default model<User>('User', userSchema)