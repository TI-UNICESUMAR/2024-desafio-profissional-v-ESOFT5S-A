import { Schema, model } from 'mongoose'
import { StatusTask } from '../enums/status.task'
import { Task } from '../types/task'

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dateCreate: { type: Date, default: Date.now },
    dateConclusion: { 
        type: Date, 
        required: true
    },
    type: { type: String, required: true },
    status: { type: String, enum: StatusTask, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
}, {
    timestamps: true
})

export default model<Task>('Task', taskSchema)