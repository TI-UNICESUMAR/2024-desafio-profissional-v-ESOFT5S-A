import { StatusTask } from "../enums/status.task";
import { Category } from "../types/category";
import { User } from "../types/user";
import { z } from 'zod';

export interface CreateTaskDTO {
    title: string,
    description: string,
    dateConclusion: Date,
    type: string, 
    status: string,
    user: User,
    category: Category
}

export const CreateTaskSchema = z.object({
    title: z.string(),
    description: z.string(),
    dateConclusion: z.date().refine((date) => date < new Date(), {
        message: 'The birth date must not be earlier than the current date',
    }),
    type: z.string(),
    status: z.nativeEnum(StatusTask),
    user: z.string().refine(value => /^[0-9a-fA-F]{24}$/.test(value), {
        message: 'Invalid objectId',
    }),
    category: z.string().refine(value => /^[0-9a-fA-F]{24}$/.test(value), {
        message: 'Invalid objectId',
    }).optional(),
});