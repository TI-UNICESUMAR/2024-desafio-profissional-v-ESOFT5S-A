import { Schema, model } from 'mongoose'
import { User } from '../types/user'

const userSchema = new Schema({
    username: { type: String, required: true },
    weight: { type: Number, required: true },
    password: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        validate: {
            validator: function(value: string) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            },
            message: "Invalid E-mail"
        }
    }
}, {
    timestamps: true
})

export default model<User>('User', userSchema)