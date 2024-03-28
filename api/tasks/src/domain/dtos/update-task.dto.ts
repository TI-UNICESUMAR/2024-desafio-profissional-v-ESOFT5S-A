import { StatusTask } from "../enums/status.task";
import { Category } from "../types/category";
import { User } from "../types/user";
import { z } from 'zod';

export interface UpdateTaskDTO {
    title: string,
    description: string,
    dateConclusion: Date,
    type: string, 
    status: string,
    user: User,
    category: Category
}

export const UpdateTaskSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    dateConclusion: z.date().refine((date) => date < new Date(), {
        message: 'The birth date must not be earlier than the current date',
    }).optional(),
    type: z.string().optional(),
    status: z.nativeEnum(StatusTask).optional(),
    user: z.string().refine(value => /^[0-9a-fA-F]{24}$/.test(value), {
        message: 'Invalid objectId',
    }).optional(),
    category: z.string().refine(value => /^[0-9a-fA-F]{24}$/.test(value), {
        message: 'Invalid objectId',
    }).optional(),
});