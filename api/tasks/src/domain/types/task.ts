import { StatusTask } from "../enums/status.task";
import { Category } from "./category";
import { User } from "./user";

export interface Task {
    id: string,
    title: string,
    dateCreate: Date, 
    dateConclusion: Date,
    type: string,
    status: StatusTask,
    user: User,
    category: Category
}