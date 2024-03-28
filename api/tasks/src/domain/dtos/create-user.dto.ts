 import { z } from 'zod';

export interface CreateUserDTO {
    username: string,
    weight: Number,
    email: string, 
    password: string
}

export const CreateUserSchema = z.object({
    username: z.string(),
    weight: z.number(),
    email: z.string().email(),
    password: z.string()
}); 