import { Schema, model, Document } from "mongoose";
import { User } from "./user";
import Category from "./category";

export interface Task extends Document {
    title: string;
    description: string;
    finishedAt?: Date;
    type?: string;
    status: string;
    category: typeof Category;
    responsibleUser: typeof User;

}

const taskSchema = new Schema<Task>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    finishedAt: { type: Date },
    type: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    status: { type: String, required: true },
    responsibleUser: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

const TaskModel = model<Task>('Task', taskSchema);

export default TaskModel;
