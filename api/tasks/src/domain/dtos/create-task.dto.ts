import { Category } from "../types/category";
import { User } from "../types/user";

export interface CreateTaskDTO {
    title: string,
    description: string,
    dateConclusion: Date,
    type: string, 
    status: string,
    user: User,
    category: Category
}