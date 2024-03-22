import { Schema, model, Document } from "mongoose";

export interface User extends Document {
    username: string;
    weight: number;
    password: string;
    email: string;
}

const userSchema = new Schema<User>({
    username: String,
    weight: Number,
    password: String,
    email: String
}, {
    versionKey: false,
    timestamps:true
});

export default model<User>('User', userSchema);
 
